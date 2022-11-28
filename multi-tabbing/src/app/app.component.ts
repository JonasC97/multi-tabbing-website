import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DockingLayoutComponent } from 'src/docking/dockingLayout.component';
import { DockingService } from 'src/docking/services/docking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'prototype-iq2';

  @ViewChild('goldenLayoutHost') private _goldenLayoutHostComponent: DockingLayoutComponent; 

constructor(private dockingService: DockingService) {}


  ngAfterViewInit() {
    setTimeout(() => {
      this._goldenLayoutHostComponent.initialise();
      this._goldenLayoutHostComponent.setVirtualActive(false);
      this.dockingService.setCurrentDockingLayout(this._goldenLayoutHostComponent);
  
    }, 0);
  }
}
