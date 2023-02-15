import { Component, Input, Inject, Optional, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DockingComponent } from 'src/docking/DockingComponent';
import { IDockingComponentConfig } from 'src/docking/interfaces/IDockingComponentConfig';
import { DataService } from 'src/dataServices/data.service';
import GoldenLayout, { ComponentContainer } from 'golden-layout';
import { BaseComponentDirective } from 'src/app/base-component.directive';


@Component({
  selector: 'app-empty',
  template: `
  <!--mat-form-field class="example-full-width">
    <mat-label>Enter a Value</mat-label>
    <input matInput placeholder="Some Value" [(ngModel)]='componentConfig.componentData.myValue'
      [value]= 'componentConfig.componentData.myValue'>
  </mat-form-field-->
  <div style=" overflow: hidden; width: 100%; height: 100%">
  <img src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style="position: relative; left: 50%; top: 50%; transform: translate(-50%, -50%)"/>
</div>
  `
})

/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
export class EmptyComponent extends DockingComponent implements AfterViewInit {

  /**
   * Default initialization.
   * Adds myValue to componentData
   */
  public componentConfig: IDockingComponentConfig = {
      id: '0',
      componentName: 'test',
      title: 'defaultTitle',
      componentData:
        {
          myValue: 'None'
        }
    };

    
  constructor(protected dataService: DataService, @Inject(BaseComponentDirective.GoldenLayoutContainerInjectionToken) protected container: ComponentContainer, elRef: ElementRef) {
    super(dataService,container, elRef.nativeElement);
    if (this.container.state !== null) {
        // get IDockingComponentConfig by th given id in goldenlayout state
        this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
        // init
        this.initInLayout(this.componentConfig);
        // set title
        //this.container.setTitle(this.componentConfig.title);
      }
    }

  initInLayout(myComponentConfig: IDockingComponentConfig): void {
     this.componentConfig = myComponentConfig;
  }

  ngAfterViewInit(): void {

    // this.iframe.nativeElement.style.width = this.container.width + "px";
    // this.iframe.nativeElement.style.height = this.container.height + "px";

  }

  getCurrentComponentConfig(): IDockingComponentConfig {
    return this.componentConfig;
    }
}


export namespace EmptyComponent {
  export const componentTypeName = 'Empty';
}
