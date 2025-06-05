import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft Inc',
    income: 10000,
    isWorking: true,
    dob: new Date('Dec 12, 1965'),
    avatar: './assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(person: any) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onInput(inputValue: string) {
    this.user.votes = parseInt(inputValue);
  }
}
