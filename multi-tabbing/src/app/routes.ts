import { Routes } from '@angular/router';
import { DockingLayoutComponent} from '../docking/dockingLayout.component';

/**
 * Angular Routes
 */
export const appRoutes: Routes = [
  { path: 'dashboard', component: DockingLayoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', data: {id: 'Main'} },
];
