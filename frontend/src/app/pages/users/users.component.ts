import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from './services/user.service';
import { UserData } from './dtos/users.dto';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class AppUsersComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private usersSubscription: Subscription;
  displayedColumns: string[] = [
    'ID',
    'Name',
    'Email',
    'PhoneNumber',
    'Role',
    'actions',
  ];
  dataSource = new MatTableDataSource<UserData>([
    // {
    //   id: '1',
    //   name: 'John Doe',
    //   email: 'john@example.com',
    //   role: 'Admin',
    //   phoneNumber: '044123123',
    // },
    // {
    //   id: '2',
    //   name: 'Jane Doe',
    //   email: 'jane@example.com',
    //   role: 'Pitch Admin',
    //   phoneNumber: '044123123',
    // },
    // {
    //   id: '3',
    //   name: 'Jane Doe',
    //   email: 'jane@example.com',
    //   role: 'User',
    //   phoneNumber: '044123123',
    // },
    // Add more data as needed
  ]);

  constructor(private userService: UserService, private router: Router) {}
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userService.getUsers();
    this.usersSubscription = this.userService.users$.subscribe(
      (users) => {
        this.dataSource.data = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  navigateToCreateUser(): void {
    this.router.navigate(['create']);
  }
}
