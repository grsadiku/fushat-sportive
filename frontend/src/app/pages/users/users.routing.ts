import { Routes } from '@angular/router';

// ui
import { AppUsersComponent } from './users.component';
import { CreateUserComponent } from './forms/create-user/create-user.component';

export const UsersComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppUsersComponent,
      },
      {
        path: 'create',
        component: CreateUserComponent,
      },
    ],
  },
];
