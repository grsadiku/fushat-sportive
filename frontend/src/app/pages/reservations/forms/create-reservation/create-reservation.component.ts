import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
})
export class CreateReservationComponent implements OnInit {
  reservationForm!: FormGroup;

  facilities = [
    { id: 1, title: 'Palestra Qendrore' },
    { id: 2, title: 'Fusha e Futbollit' },
    { id: 3, title: 'Pishina Verore' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      Title: ['', Validators.required],
      IDFacility: [null, Validators.required],
      ReservationDate: [null, Validators.required],
      ReservationEndDate: [null, Validators.required],
      IsRecurring: [false],
    });
  }

  saveReservation(): void {
    if (this.reservationForm.valid) {
      const reservationData = this.reservationForm.value;
      console.log('Reservation saved:', reservationData);
      // Add API call or service logic here
    } else {
      this.reservationForm.markAllAsTouched();
    }
  }
}
