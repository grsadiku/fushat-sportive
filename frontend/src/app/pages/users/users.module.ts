import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UsersComponentsRoutes } from './users.routing';

// ui components
import { AppUsersComponent } from './users.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateUserComponent } from './forms/create-user/create-user.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppUsersComponent,
    CreateUserComponent,
    EditUserComponent
  ],
})
export class UserscomponentsModule {}
