import { Routes } from '@angular/router';

import { AppHomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: AppHomeComponent,
      }
    ],
  },
];
