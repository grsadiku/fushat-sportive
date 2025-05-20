import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { UserData } from '../dtos/users.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private usersSubject = new BehaviorSubject<UserData[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<UserData[]> {
  //   return this.http.get<UserData[]>(this.url, {
  //     headers: { Accept: 'application/json' },
  //   });
  // }

  getUsers(): void {
    this.http
      .get<UserData[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Error fetching users:', error);
          throw error;
        })
      )
      .subscribe((users) => {
        this.usersSubject.next(users);
      });
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, userData);
  }

  editUser(userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/put`, userData);
  }
}
