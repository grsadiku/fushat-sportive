import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// ui components
import { AppReservationComponent } from './reservations.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReservationComponentsRoutes } from './reservations.routing';
import { MatCardModule } from '@angular/material/card';
import { CreateReservationComponent } from './forms/create-reservation/create-reservation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReservationComponentsRoutes),
    MaterialModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  declarations: [AppReservationComponent, CreateReservationComponent],
})
export class ReservationComponentsModule {}
