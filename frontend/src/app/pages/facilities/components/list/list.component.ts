import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    RouterLink,
    TablerIconsModule,
  ],
})
export class ListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'id',
    'name',
    'sport',
    'phoneNumber',
    'manager',
    'actions',
  ];
  dataSource = new MatTableDataSource<FacilitiesData>([
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '1',
      name: 'Ylli',
      sport: 'Futboll',
      manager: 'Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '2',
      name: 'Beselidhja',
      sport: 'Basketboll',
      manager: 'Pitch Admin',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    {
      id: '3',
      name: 'Tenisi yne',
      sport: 'Tenis',
      manager: 'User',
      phoneNumber: '044123123',
      qyteti: 'Prishtine',
    },
    // Add more data as needed
  ]);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

interface FacilitiesData {
  id: string;
  name: string;
  sport: string;
  manager: string;
  phoneNumber: string;
  qyteti: string;
}
