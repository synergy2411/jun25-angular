import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { DataService } from '../../services/data.service';
import { IUser } from '../../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users!: Array<IUser>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getUsersData()
      .subscribe((allUsers) => (this.users = allUsers));
  }

  onMoreInfo(person: any) {
    alert(
      `Mr. ${person.lastName.toUpperCase()} is working with ${person.company}!`
    );
  }

  onInput(inputValue: string) {
    // this.user.votes = parseInt(inputValue);
  }
}
