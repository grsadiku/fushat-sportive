import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html'
})
export class AppFacilitiesComponent implements OnInit, AfterViewInit  {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['id', 'name', 'sport', 'phoneNumber', 'manager', 'actions'];
  dataSource = new MatTableDataSource<FacilitiesData>([
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '1', name: 'Ylli', sport: 'Futboll', manager: 'Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '2', name: 'Beselidhja', sport: 'Basketboll', manager: 'Pitch Admin', phoneNumber: '044123123', qyteti: 'Prishtine' },
    { id: '3', name: 'Tenisi yne', sport: 'Tenis', manager: 'User', phoneNumber: '044123123', qyteti: 'Prishtine' },
    // Add more data as needed
  ]);
  
  constructor() { }

  ngOnInit(): void {
  }

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