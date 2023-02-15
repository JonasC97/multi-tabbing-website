import { Component, Input, Inject, Optional, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DockingComponent } from 'src/docking/DockingComponent';
import { IDockingComponentConfig } from 'src/docking/interfaces/IDockingComponentConfig';
import { DataService } from 'src/dataServices/data.service';
import GoldenLayout, { ComponentContainer } from 'golden-layout';
import { BaseComponentDirective } from 'src/app/base-component.directive';
import { TestComponent } from './test.component';


@Component({
  selector: 'app-test2',
  template: `
  <!--mat-form-field class="example-full-width">
    <mat-label>Enter a Value</mat-label>
    <input matInput placeholder="Some Value" [(ngModel)]='componentConfig.componentData.myValue'
      [value]= 'componentConfig.componentData.myValue'>
  </mat-form-field-->
  <div style="height: 100%; width: 100%">
    <iframe #iframe height="100%" width="100%"  [attr.disabled]="isDisabled"></iframe>
  </div>`
})

/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
export class TestComponent2 extends TestComponent  implements AfterViewInit {
  isDisabled = true;

  @ViewChild("iframe", { static: false })
  iframe: ElementRef;

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

    
  constructor(protected dataService: DataService, @Inject(DockingComponent.GoldenLayoutContainerInjectionToken) protected container: ComponentContainer, elRef: ElementRef) {
    super(dataService, container, elRef);
    TestComponent2.componentTypeName = 'test2';
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
    console.log(this.iframe.nativeElement)
    console.log(this.iframe)
    this.iframe.nativeElement.src = this.componentConfig.componentData.myValue
    this.container.on('__all', () => {
      const elements = document.querySelectorAll('.lm_drag_handle');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        // do something with the element
        element.addEventListener('mouseover', (event) => {
          // your code here
          console.log("hover über drag handle")
          this.iframe.nativeElement.src = null;
        });
      }
    });

    this.container.on('resize', () => {
      this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
    });

  }

  getCurrentComponentConfig(): IDockingComponentConfig {
    return this.componentConfig;
    }
}


// export namespace TestComponent2 {
//   export const componentTypeName = 'Test2';
// }
