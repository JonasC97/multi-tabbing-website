import { Component, Input, Inject, Optional, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DockingComponent } from 'src/docking/DockingComponent';
import { IDockingComponentConfig } from 'src/docking/interfaces/IDockingComponentConfig';
import { DataService } from 'src/dataServices/data.service';
import GoldenLayout, { ComponentContainer } from 'golden-layout';
import { BaseComponentDirective } from 'src/app/base-component.directive';
import * as $ from "jquery";
import { OnDestroy, OnInit } from '@angular/core';
window["$"] = $



@Component({
  selector: 'app-vid',
  template: `
  <!--mat-form-field class="example-full-width">
    <mat-label>Enter a Value</mat-label>
    <input matInput placeholder="Some Value" [(ngModel)]='componentConfig.componentData.myValue'
      [value]= 'componentConfig.componentData.myValue'>
  </mat-form-field-->
  <div style="height: 100%; width: 100%">
  <!-- <vg-player>
    <video [vgMedia]="$any(media)" #media id="singleVideo" preload="auto" controls>
        <source src=" " type="video/mp4">
    </video>
</vg-player> -->
<video  style="width:100%; height:100%" [muted]="'muted'" autoplay loop>
		<source src={{this.src}} type="video/mp4" />
		Browser not supported
	</video>
 
  </div>`
})
/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
export class VideoComponent extends DockingComponent  implements AfterViewInit {

public src;

  isDisabled = true;


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
        // init
        this.initInLayout(this.componentConfig);
        this.container.setTitle(this.componentConfig.title);
        // set title
        //this.container.setTitle(this.componentConfig.title);
      }
    }

  initInLayout(myComponentConfig: IDockingComponentConfig): void {
     this.componentConfig = myComponentConfig;
     this.src = this.componentConfig.componentData.myValue
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

  }

  getCurrentComponentConfig(): IDockingComponentConfig {
    return this.componentConfig;
    }


  // Instantiate a Video.js player OnInit
  ngOnInit() {
    // this.player = videojs(this.videoPlayerRef.nativeElement, this.options, function onPlayerReady() {
    //   console.log('onPlayerReady', this);
    // });
  }
  
    ngOnDestroy() {

    }
  
}


// export namespace TestComponent {
//   export const componentTypeName = 'Test';
// }
