import { Component } from '@angular/core';
import {
  filter,
  map,
  take,
  Observable,
  Subscription,
  from,
  interval,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent {
  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 1500);
    setTimeout(() => {
      observer.next('Third Package');
    }, 3000);
    setTimeout(() => {
      observer.next('Fourth Package');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

  interval$ = interval(1000);
  fromArray$ = from(['Monica', 'Rachel', 'Joey', 'Ross']);

  unSub$!: Subscription;

  onSubscribe() {
    this.interval$
      .pipe(
        filter((value) => value % 2 == 0), //0, 1, 2, 3, 4
        map((value) => value + 3),
        take(5)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.error(error),
        () => console.log('COMPLETED')
      );

    this.fromArray$
      .pipe(tap((value) => console.log('[TAP]', value)))
      .subscribe(console.log);

    // console.log('Start');
    // this.unSub$ = this.obs$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.error(err),
    //   complete: () => console.log('[COMPLETED]'),
    // });
    // console.log('End');
  }

  onUnsubscribe() {
    // this.unSub$.unsubscribe();
  }
}
