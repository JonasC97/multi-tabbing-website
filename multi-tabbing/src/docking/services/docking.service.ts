import { ComponentFactoryResolver, Injectable, Injector, StaticProvider, Type } from '@angular/core';
import { DockingLayoutComponent } from '../dockingLayout.component';
import { IDockingLayoutConfig } from '../interfaces/IDockingLayoutConfig';
import GoldenLayout, { ComponentContainer, JsonValue } from 'golden-layout';
import { ComponentConfigService } from './componentConfig.service';
import { IDockingComponentConfig } from '../interfaces/IDockingComponentConfig';
import { DataService } from '../../dataServices/data.service';
import { BaseComponentDirective } from 'src/app/base-component.directive';


@Injectable({
  providedIn: 'root'
})
/**
 * A service that is responsible for interaction with the docking layout.
 */
export class DockingService {

  /**
   * The current loaded DockingLayoutComponent.
   */
  private currentdockingLayout: DockingLayoutComponent;

  private _componentTypeMap = new Map<string, Type<BaseComponentDirective>>();

  constructor( private componentConfigService: ComponentConfigService, private dataService: DataService, private componentFactoryResolver: ComponentFactoryResolver) {
  }


  registerComponentType(name: string, componentType: Type<BaseComponentDirective>) {
    this._componentTypeMap.set(name, componentType);
  }

  
  createComponent(componentTypeJsonValue: JsonValue, container: ComponentContainer) {
    const componentType = this._componentTypeMap.get(componentTypeJsonValue as string);
    if (componentType === undefined) {
      throw new Error('Unknown component type')
    } else {
      const provider: StaticProvider = { provide: BaseComponentDirective.GoldenLayoutContainerInjectionToken, useValue: container };
      const injector = Injector.create({
        providers: [provider]
      });
      const componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory<BaseComponentDirective>(componentType);
      return componentFactoryRef.create(injector);
    }
  }

  getRegisteredComponentTypeNames(): string[] {
    const count = this._componentTypeMap.size;
    const result = new Array<string>(count);
    let idx = 0;
    for (let [key, value] of this._componentTypeMap) {
      result[idx++] = key;
    }
    return result;
  }

  /**
   * Save the given IDockingLayoutConfig with help of DataService.
   */
  saveDockingLayoutConfig(myDockingLayoutConfig: IDockingLayoutConfig): void {
    this.dataService.saveIDockingLayoutConfig(myDockingLayoutConfig);
  }

  /**
   * Get the IDockingLayoutConfig with the given myId with help of DataService.
   */
  getDockingLayoutConfigById(myId: string): IDockingLayoutConfig {
    return this.dataService.getIDockingLayoutConfigById(myId);
  }

  /**
   * Get the IDockingLayoutConfig with the given myTitle with help of DataService.
   */
  getDockingLayoutConfigByTitle(myTitle: string): IDockingLayoutConfig {
    return this.dataService.getIDockingLayoutConfigByTitle(myTitle);
  }

  /**
   * Set the current loaded DockingLayoutComponent.
   */
  setCurrentDockingLayout(myDockingLayout: DockingLayoutComponent): void {
    this.currentdockingLayout = myDockingLayout;
  }

  /**
   * Get the current loaded DockingLayoutComponent.
   */
  getCurrentDockingLayout(): any {
    return this.currentdockingLayout.goldenLayout;
  }

  /**
   * Create the [[DockingComponent]] which is defined by myComponentConfig, in the [[currentDockingLayout]].
   * @param myComponentConfig the [[IDockingComponentConfig]] of the DockingComponent we want to create.
   * This function will call the [[saveIDockingComponentConfigAsync]] of [[DataService]].
   * First we save the IDockingComponentConfig with DataService.
   * Then we create an unfilled golden layout container with the Id given in IDockingComponentConfig.
   * The generated DockingComponent will fetch the data transferred from dataservice in the first step to initialize.
   * Step 1: Save data.
   * Step 2: Create empty DockingComponent with Id.
   * Step 3 (In DockingComponent): Get data from step 1.
   */
  createComponentInCurrentDockingLayout(myComponentConfig: IDockingComponentConfig): void {
    // generate new GUID if id is '0'
    if (myComponentConfig.id === '0') {
      myComponentConfig.id = this.componentConfigService.generateId();
    }
    // async call to save data (step 1)
    this.dataService.saveIDockingComponentConfigAsync(myComponentConfig).then(
      // then addComponent in currentDockingLayout with the given id (step 2)
      () => this.getCurrentDockingLayout().newComponent("Test",myComponentConfig,"test-Title"));//newComponent(myComponentConfig.id, myComponentConfig.componentName));
  }
  /**
   * Load a DockingComponent into the currentDockingLayout.
   * @param myId the Id of the DockingComponent we want to load.
   * @param myComponentName name of the DockingComponent, optional:
   * if not given it will fetch it from DataService.
   * It will only add an empty DockingComponent to the DockingLayout, the DockingComponent will load its data itself.
   */
  loadComponentInCurrentDockingLayout(myId: string, myComponentName: string = 'NoName'): void {
    if (myComponentName === 'NoName') {
      myComponentName = this.dataService.getIDockingComponentNameById(myId);
    }
    let state: any = {};
    state.id = myId;
    //this.getCurrentDockingLayout().addComponent(myId, myComponentName);
    this.getCurrentDockingLayout().newComponent(myComponentName,state, "");
  }

}
