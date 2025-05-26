import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Reservation } from '../dtos/reservation.dto';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private apiUrl = 'http://localhost:3000/reservations'; // Replace with your NestJS API base URL

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.ID,
          facility: item.FacilityTitle,
          sport: item.FacilitySport,
          userName: item.EntryUserFullName,
          phoneNumber: '', // Placeholder if you don't have it
          reservationDate: item.ReservationDate,
          city: item.FacilityLocation,
        }))
      )
    );
  }
}
