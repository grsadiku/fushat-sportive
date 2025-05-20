import { Routes } from '@angular/router';

// ui
import { AppReservationComponent } from './reservations.component';

export const ReservationComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'reservations',
        component: AppReservationComponent,
      },
    ],
  },
];
