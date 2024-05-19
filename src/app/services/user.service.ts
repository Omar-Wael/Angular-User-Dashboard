import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?page=${page}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
