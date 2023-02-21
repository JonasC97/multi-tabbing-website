import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { DockingService } from 'src/docking/services/docking.service';
import { IDockingComponentConfig } from 'src/docking/interfaces/IDockingComponentConfig';
import { LocalDataService } from 'src/dataServices/localData.service';
import { LayoutConfig, ResolvedLayoutConfig } from 'golden-layout';
@Component({
  selector: 'app-navigation',
  template: `<mat-toolbar color="primary">
            <mat-toolbar-row>
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.youtube.com/embed/-abgQPOGkG0')">YouTube</a></span>
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.wikipedia.org')">Wikipedia</a></span>
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.openstreetmap.de/karte/')">OSM</a></span>
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.hs-ruhrwest.de')">HRW</a></span>            
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://golden-layout.com/')">GoldenLayout</a></span>            
          
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.facebook.com')">Facebook</a></span>
            <span style="margin-left:3em"><a class="menu_links" (click)="addTab('https://www.google.de')">Google</a></span>
            <span style="margin-left:3em"><a class="menu_links" (click)="saveDockingLayout()" >Save Dockinglayout</a></span>
            </mat-toolbar-row>`,
  styles: [` a.menu_links {
            cursor: pointer;
          }`]
})


/**
 * Only mockup
 */
export class NavComponent {

  private example ={
    "root": {
        "type": "row",
        "content": [
            {
                "type": "stack",
                "content": [
                    {
                        "type": "component",
                        "content": [],
                        "size": 1,
                        "sizeUnit": "fr",
                        "minSizeUnit": "px",
                        "id": "",
                        "maximised": false,
                        "isClosable": true,
                        "reorderEnabled": true,
                        "title": "test-Title",
                        "componentType": "test",
                        "componentState": {
                            "id": "a7016cf2-c776-61e6-aaf4-c4c11286bf22",
                            "componentName": "test",
                            "title": "my Tab",
                            "componentData": {
                                "myValue": "https://www.openstreetmap.de/karte/"
                            }
                        }
                    }
                ],
                "size": 50,
                "sizeUnit": "%",
                "minSizeUnit": "px",
                "id": "",
                "isClosable": true,
                "maximised": false,
                "activeItemIndex": 0
            },
            {
                "type": "stack",
                "content": [
                    {
                        "type": "component",
                        "content": [],
                        "size": 1,
                        "sizeUnit": "fr",
                        "minSizeUnit": "px",
                        "id": "",
                        "maximised": false,
                        "isClosable": true,
                        "reorderEnabled": true,
                        "title": "test-Title",
                        "componentType": "test",
                        "componentState": {
                            "id": "a89de9b1-9432-f338-c113-1c36ba31a2a6",
                            "componentName": "test",
                            "title": "my Tab",
                            "componentData": {
                                "myValue": "https://www.openstreetmap.de/karte/"
                            }
                        }
                    }
                ],
                "size": 50,
                "sizeUnit": "%",
                "minSizeUnit": "px",
                "id": "",
                "isClosable": true,
                "maximised": false,
                "activeItemIndex": 0
            }
        ],
        "size": 1,
        "sizeUnit": "fr",
        "minSizeUnit": "px",
        "id": "",
        "isClosable": true
    },
    "openPopouts": [],
    "settings": {
        "constrainDragToContainer": true,
        "reorderEnabled": true,
        "popoutWholeStack": false,
        "blockedPopoutsThrowError": true,
        "closePopoutsOnUnload": true,
        "responsiveMode": "none",
        "tabOverlapAllowance": 0,
        "reorderOnTabMenuClick": true,
        "tabControlOffset": 10,
        "popInOnClose": false
    },
    "dimensions": {
        "borderWidth": 5,
        "borderGrabWidth": 5,
        "defaultMinItemHeight": 0,
        "defaultMinItemHeightUnit": "px",
        "defaultMinItemWidth": 10,
        "defaultMinItemWidthUnit": "px",
        "headerHeight": 20,
        "dragProxyWidth": 300,
        "dragProxyHeight": 200
    },
    "header": {
        "show": "top",
        "popout": "open in new window",
        "dock": "dock",
        "close": "close",
        "maximise": "maximise",
        "minimise": "minimise",
        "tabDropdown": "additional tabs"
    },
    "resolved": true
  }

  constructor(private router: Router, private dockingService: DockingService, private testService: LocalDataService) {

  }

  showSettings(): void {
    this.router.navigate(['settings']);
  }

  showDashboard(): void {
    this.router.navigate(['dashboard'], { queryParams: { title: 'main' } });
  }

  addTab(link): void {
    const testComponentConfig: IDockingComponentConfig = {
      id: '0',
      componentName: 'test',
      title: 'my Tab',
      componentData: {
        myValue: link
      }
    };
    this.dockingService.createComponentInCurrentDockingLayout(testComponentConfig);
  }

  addEmptyTab(): void {
    const testComponentConfig: IDockingComponentConfig = {
      id: '0',
      componentName: 'empty',
      title: 'my Tab',
      componentData: {
      }
    };
    this.dockingService.createComponentInCurrentDockingLayout(testComponentConfig);
  }

  openTab(): void {
    this.dockingService.loadComponentInCurrentDockingLayout('4711', 'test');
  }

  saveDockingLayout(): void {
    //this.dockingService.getCurrentDockingLayout().saveDockingLayoutConfig();
    // this.testService.saveComponentConfigsToFile();
    // this.testService.saveLayoutsConfigsToFile();
    //let layout = LayoutConfig.fromResolved(this.dockingService.getCurrentDockingLayout().saveLayout());
    let layout = this.dockingService.getCurrentDockingLayout().saveLayout();
    console.log(layout)
    layout = LayoutConfig.fromResolved(this.example as ResolvedLayoutConfig);
    this.dockingService.getCurrentDockingLayout().loadLayout(layout);
    //console.log(layout.saveLayout());
    //this.dockingService.getCurrentDockingLayout().loadLayout(layout);
  }

}
