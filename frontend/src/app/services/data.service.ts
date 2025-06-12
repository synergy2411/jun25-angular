import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://sk-jun-25-default-rtdb.firebaseio.com/users.json';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsersData() {
    return this.http.get<IUser[]>(
      `${this.baseUrl}?auth=${this.authService.getToken()}`
    );
  }
}
