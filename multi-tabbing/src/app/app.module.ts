import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from '../widgets/nav.component';
import { DockingLayoutComponent} from '../docking/dockingLayout.component';
import { appRoutes } from './routes';
import { TestComponent } from 'src/docking/dockingWidgets/test.component';
import { from } from 'rxjs';
import { DockingService } from 'src/docking/services/docking.service';
import { EmptyComponent } from 'src/docking/dockingWidgets/empty.component';
import { TestComponent2 } from 'src/docking/dockingWidgets/test2.component';

// It is required to have JQuery as global in the window object.
window['$'] = $;

/**
 * Define our components.
 */
const COMPONENTS = [
  AppComponent,
  NavComponent,
  TestComponent,
  TestComponent2,
  DockingLayoutComponent,
  EmptyComponent
];

/**
 * Is required for golden layout.
 * Define here all types that you want to include in the golden layout.
 */
// const componentTypes: ComponentType[] = [{
//   name: 'test',
//   type: TestComponent
// },
// {
//   name: 'loading',
//   type: LoadingComponent
// }
// ];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ COMPONENTS],
  providers: [DockingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
