import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  app = initializeApp({
    apiKey: 'AIzaSyBPFEzfWxYLy-kkAhnqPBeyHdEWpDuZNpU',
    authDomain: 'sk-jun-25.firebaseapp.com',
  });

  auth = getAuth(this.app);

  private token: string = '';

  constructor(private router: Router) {}

  async userRegister(email: string, password: string) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log(userCredentials);
      console.log('User Registered!');
      this.router.navigateByUrl('/login');
    } catch (err) {
      console.error(err);
    }
  }

  async userLogin(email: string, password: string) {
    try {
      const userCreds = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const token = await userCreds.user.getIdToken();
      this.token = token;
      console.log('TOKEN : ', token);
      this.router.navigateByUrl('/users');
    } catch (err) {
      throw err;
    }
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token !== '';
  }
}
