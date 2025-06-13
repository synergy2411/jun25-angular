import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    return { message: 'success' };
  }

  getObservableData() {
    return of('observable data');
  }

  getPromiseData() {
    return Promise.resolve({ message: 'Promise data' });
  }
}
