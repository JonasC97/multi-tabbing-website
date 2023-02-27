import { Component, Input, Inject, Optional, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DockingComponent } from 'src/docking/DockingComponent';
import { IDockingComponentConfig } from 'src/docking/interfaces/IDockingComponentConfig';
import { DataService } from 'src/dataServices/data.service';
import GoldenLayout, { ComponentContainer } from 'golden-layout';
import { BaseComponentDirective } from 'src/app/base-component.directive';
import * as $ from "jquery";

window["$"] = $



@Component({
  selector: 'app-test',
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
export class TestComponent extends DockingComponent  implements AfterViewInit {

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
    super(dataService,container, elRef);
    console.log(this.container);
    if (this.container.state !== null) {
        // get IDockingComponentConfig by th given id in goldenlayout state
        this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
        this.container.setTitle(this.componentConfig.title);
        // init
        this.initInLayout(this.componentConfig);
        // set title
        //this.container.setTitle(this.componentConfig.title);
      }
    }

  initInLayout(myComponentConfig: IDockingComponentConfig): void {
     this.componentConfig = myComponentConfig;
  }

  mouseDown: boolean = false;

  ngAfterViewInit(): void {

    // Make sure that - as long as the mouse is pressed on the drag handles - the overlay does not get toggled
    $(document.body).on("mousedown", ".lm_drag_handle", (event) => {
      // console.log("Down");
      this.mouseDown = true;
    })

    $(document.body).on("mouseup", ".lm_drag_handle", (event) => {
      // console.log("Up");
      this.mouseDown = false;
    })

    // Activate the overlay, when entering the drag handles
    $(document.body).on("mouseenter", ".lm_drag_handle", (event) => {
      if(this.mouseDown === false){
        // console.log("Entering");
        document.getElementById("opaqueOverlay").style.display = "block";  
      }
    })

    // Deactivate the overlay, when leaving the drag handles
    $(document.body).on("mouseleave", ".lm_drag_handle", (event) => {
      if(this.mouseDown === false){
        // console.log("Leaving");
        document.getElementById("opaqueOverlay").style.display = "none";
      }
    })

    console.log(this.iframe.nativeElement)
    console.log(this.iframe)
    this.iframe.nativeElement.src = this.componentConfig.componentData.myValue


    // this.container.on('__all', () => {
    //   const elements = document.querySelectorAll('.lm_drag_handle');
    //   for (let i = 0; i < elements.length; i++) {
    //     const element = elements[i];
    //     // do something with the element
    //     element.addEventListener('mouseenter', (event) => {
    //       // your code here
    //       // console.log("hover über drag handle")
    //       // this.iframe.nativeElement.src = null;
    //       console.log("Entering");
    //       document.getElementById("opaqueOverlay").style.display = "block";
    //     });
    //     element.addEventListener('mouseleave', (event) => {
    //       // your code here
    //       // console.log("hover über drag handle")
    //       // this.iframe.nativeElement.src = null;
    //       console.log("Leaving");
    //       document.getElementById("opaqueOverlay").style.display = "none";
    //     });
    //   }
    // });

    // this.container.on('resize', () => {
    //   // console.log("RESIZE");
    //   // // this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
    //   // document.getElementById("opaqueOverlay").style.display = "none";
    // });

  }

  getCurrentComponentConfig(): IDockingComponentConfig {
    return this.componentConfig;
    }
}


// export namespace TestComponent {
//   export const componentTypeName = 'Test';
// }
