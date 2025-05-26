import { Routes } from '@angular/router';

// ui
import { AppReservationComponent } from './reservations.component';
import { CreateReservationComponent } from './forms/create-reservation/create-reservation.component';

export const ReservationComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppReservationComponent,
      },
      {
        path: 'create',
        component: CreateReservationComponent,
      },
    ],
  },
];
