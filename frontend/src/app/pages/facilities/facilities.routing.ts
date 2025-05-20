import { Routes } from '@angular/router';

// ui
import { AppFacilitiesComponent } from './facilities.component';

export const FacilitiesComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'facilities',
        component: AppFacilitiesComponent,
      }
    ],
  },
];
