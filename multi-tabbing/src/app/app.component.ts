import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LayoutConfig, ResolvedLayoutConfig } from 'golden-layout';
import { DockingLayoutComponent } from 'src/docking/dockingLayout.component';
import { DockingService } from 'src/docking/services/docking.service';
import { MatDialog } from '@angular/material/dialog';
import { StartDialog } from './StartDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'prototype-iq2';

  @ViewChild('goldenLayoutHost') private _goldenLayoutHostComponent: DockingLayoutComponent; 

constructor(private dockingService: DockingService, private dialog: MatDialog) {
}
private example = {
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
                      "showPopoutIcon": false,
                      "isClosable": true,
                      "reorderEnabled": true,
                      "title": "Pazifik Kamera",
                      "componentType": "vid",
                      "componentState": {
                          "id": "a7016cf2-c776-61e6-aaf4-c4c11286bf22"
                      }
                  }
              ],
              "size": 15.86497677373964,
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
                      "showPopoutIcon": false,
                      "maximised": false,
                      "isClosable": true,
                      "reorderEnabled": true,
                      "title": "Cayman Reef Süd Kamera",
                      "componentType": "vid",
                      "componentState": {
                          "id": "ea74a320-bd21-4c5d-abb6-051281fb6399"
                      }
                  }
              ],
              "size": 16.00353552285527,
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
                      "title": "Indischer Ozean Kamera",
                      "componentType": "vid",
                      "componentState": {
                          "id": "8fc80a51-a9e8-561d-9dd8-623339f5a9c7"
                      }
                  }
              ],
              "size": 15.679955418502596,
              "sizeUnit": "%",
              "minSizeUnit": "px",
              "id": "",
              "isClosable": true,
              "maximised": false,
              "activeItemIndex": 0
          },
          {
              "type": "column",
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
                              "showPopoutIcon": false,
                              "maximised": false,
                              "isClosable": false,
                              "reorderEnabled": false,
                              "title": "Karibische Fische",
                              "componentType": "test",
                              "componentState": {
                                  "id": "54c26490-390b-1157-1ae5-c52f29acb82d",
                                  "componentName": "test",
                                  "title": "my Tab",
                                  "componentData": {
                                      "myValue": "https://www.wikipedia.org"
                                  }
                              }
                          },
                          {
                              "type": "component",
                              "content": [],
                              "size": 1,
                              "sizeUnit": "fr",
                              "minSizeUnit": "px",
                              "id": "",
                              "maximised": false,
                              "isClosable": false,
                              "reorderEnabled": false,
                              "title": "Indischer Ozean Lexikon",
                              "componentType": "test",
                              "componentState": {
                                  "id": "22be6a6e-d978-c3b6-b63b-b61ece4882c3",
                                  "componentName": "test",
                                  "title": "my Tab",
                                  "componentData": {
                                      "myValue": "https://www.wikipedia.org"
                                  }
                              }
                          }
                      ],
                      "size": 50,
                      "sizeUnit": "%",
                      "minSizeUnit": "px",
                      "id": "",
                      "isClosable": false,
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
                              "isClosable": false,
                              "reorderEnabled": false,
                              "title": "Online Notizblock",
                              "componentType": "test",
                              "componentState": {
                                  "id": "eea2d6f1-f39a-eb1d-388a-f63af24b8356",
                                  "componentName": "test",
                                  "title": "my Tab",
                                  "componentData": {
                                      "myValue": "https://golden-layout.com/"
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
              "size": 52.45153228490249,
              "sizeUnit": "%",
              "minSizeUnit": "px",
              "id": "",
              "isClosable": true
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


  ngAfterViewInit() {
    this.openDialog();

    setTimeout(() => {
      this._goldenLayoutHostComponent.initialise();
      this._goldenLayoutHostComponent.setVirtualActive(false);
      this.dockingService.setCurrentDockingLayout(this._goldenLayoutHostComponent);
      let layout;
      layout = LayoutConfig.fromResolved(this.example as ResolvedLayoutConfig);
      this.dockingService.getCurrentDockingLayout().loadLayout(layout);
      this.dockingService;  
    }, 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(StartDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
