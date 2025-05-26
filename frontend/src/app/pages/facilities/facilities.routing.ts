import { Routes } from '@angular/router';

// ui
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

export const FacilitiesComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'facilities',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
  },
];
