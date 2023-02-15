
import { ElementRef, Inject, InjectionToken, Optional } from '@angular/core'; 
import { IDockingComponentConfig } from './interfaces/IDockingComponentConfig';
import { DataService } from '../dataServices/data.service';
import GoldenLayout, { ComponentContainer } from 'golden-layout';
import { BaseComponentDirective } from 'src/app/base-component.directive';

/**
 * An abstract class which represents a component that can be added to [[dockingLayout.component]].
 */
export abstract class DockingComponent{
  static componentTypeName;
  public rootHtmlElement;
  /** An [[IDockingComponentConfig]] that defines all attributes to add this component to the [[dockingLayout.component]].
   * If you want to pass own attributes to your component add them to this componentConfig.componentData
   */
  public componentConfig: IDockingComponentConfig =
  {
    id: '0',
    componentName: 'test',
    title: 'defaultTitle',
    componentData: {}
  };

  /**
   *
   * @param myState GoldenLayoutComponentState, here it saves the id of this component.
   *                Used to pass the id from goldenlayout to this component.
   *                Optional because a DockingComponent dont have to be docked in goldenlayout.
   * @param myContainer GoldenLayoutContainer used to change goldenlayout tab title from this component.
   *                    Optional because a DockingComponent dont have to be docked in goldenlayout.
   * @param myDataService DataService to get the IDockingComponentConfig from the given id.
   */
   constructor(protected myDataService: DataService, @Inject(DockingComponent.GoldenLayoutContainerInjectionToken) protected container: ComponentContainer, elRef: ElementRef) {
    this.rootHtmlElement = elRef.nativeElement;
  }

  /**
   * Abstract function:
   * Define how the componentConfig sets the attributes in this component.
   * @parm myComponentConfig the [[componentConfig]] we get to initialize this component.
   */
  abstract initInLayout(myComponentConfig: IDockingComponentConfig): void;

  /**
   * Abstract function:
   * Define how the component returns its componentConfig
   * (it is up to each component how and when it saves its attributes).
   * @returns the [[componentConfig]] of this Component.
   */
  abstract getCurrentComponentConfig(): IDockingComponentConfig;

  /**
   * Saves the IDockingComponentConfig with the help of the DataService to a local file or webserver.
   */
  saveCurrentComponentConfig(): void {
    this.myDataService.saveIDockingComponentConfig(this.getCurrentComponentConfig());
  }

  /**
   * Setter for the id in [[componentConfig]].
   */
  setId(myId: string): void {
    this.componentConfig.id = myId;
  }

  /**
   * Getter for the id in [[componentConfig]].
   */
  getId(): string {
      return this.componentConfig.id;
  }

  /**
   * Getter for the state passed by goldenlayout.
   */
  getStateFromGoldenLayout(): any {
    //return this.myState;
  }

  setPositionAndSize(left: number, top: number, width: number, height: number) {
    this.rootHtmlElement.style.left = this.numberToPixels(left);
    this.rootHtmlElement.style.top = this.numberToPixels(top);
    this.rootHtmlElement.style.width = this.numberToPixels(width);
    this.rootHtmlElement.style.height = this.numberToPixels(height);
} 

setVisibility(visible: boolean) {
    if (visible) {
        this.rootHtmlElement.style.display = '';
    } else {
        this.rootHtmlElement.style.display = 'none';
    }
}

setZIndex(value: string) {
    this.rootHtmlElement.style.zIndex = value;
}

private numberToPixels(value: number): string {
    return value.toString(10) + 'px';
}
}

export namespace DockingComponent {
  const GoldenLayoutContainerTokenName = 'GoldenLayoutContainer'; 
  export const GoldenLayoutContainerInjectionToken = new InjectionToken<ComponentContainer>(GoldenLayoutContainerTokenName);
}
