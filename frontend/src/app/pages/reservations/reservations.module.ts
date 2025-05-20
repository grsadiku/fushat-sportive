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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReservationComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  declarations: [AppReservationComponent],
})
export class ReservationComponentsModule {}
