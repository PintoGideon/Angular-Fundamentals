import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [class.checked-in]="passenger.checked - in"
          ></span>
          {{ i }}: {{ passenger.fullName }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false
    }
  ];
}
