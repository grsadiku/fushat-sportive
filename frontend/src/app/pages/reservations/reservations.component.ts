import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
})
export class AppReservationComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'id',
    'facility',
    'sport',
    'phoneNumber',
    'userName',
    'reservationDate',
    'city',
    'actions',
  ];
  dataSource = new MatTableDataSource<ReservationData>([
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      city: 'Prishtine',
      reservationDate: '20.02.2024',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      reservationDate: '20.02.2024',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      reservationDate: '20.02.2024',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      reservationDate: '20.02.2024',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      reservationDate: '20.02.2024',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '3',
      reservationDate: '20.02.2024',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      reservationDate: '20.02.2024',
      userName: 'User',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      reservationDate: '20.02.2024',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      phoneNumber: '044123123',
      city: 'Prishtine',
      reservationDate: '20.02.2024',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      city: 'Prishtine',
      reservationDate: '20.02.2024',
    },
    {
      id: '1',
      facility: 'Ylli',
      sport: 'Futboll',
      userName: 'Admin',
      phoneNumber: '044123123',
      city: 'Prishtine',
      reservationDate: '20.02.2024',
    },
    {
      id: '2',
      facility: 'Beselidhja',
      sport: 'Basketboll',
      userName: 'Pitch Admin',
      reservationDate: '20.02.2024',
      phoneNumber: '044123123',
      city: 'Prishtine',
    },
    {
      id: '3',
      facility: 'Tenisi yne',
      sport: 'Tenis',
      userName: 'User',
      phoneNumber: '044123123',
      reservationDate: '20.02.2024',
      city: 'Prishtine',
    },
  ]);

  handleDateClick(event: any): void {
    console.log('Date clicked', event);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

interface ReservationData {
  id: string;
  userName: string;
  sport: string;
  facility: string;
  phoneNumber: string;
  city: string;
  reservationDate: string;
}
