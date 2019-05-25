### How to inject a service as a dependency.

```javascript
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }


```

However if we do rely on a particular provider like http here, We need to import an Injectable.

Now we decorate the PassengerDashboardService as an Injectable which will tell Angular that we can inject things into a constructor.

```javascript
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}
}


```

Data flow using Observables.

- Import Observables

  ```javascript
  import { Observable } from 'rxjs/Observable';
  ```

- The data from getPassengers is returned as an Observables of the Type Passenger.
  ```javascript
  getPassengers(): Observable<Passenger[]> {
   return this.http
     .get(PASSENGER_API)
     .map((response: Response) => response.json());
  }
  ```

````

- In the dashboard Component, we will bind     the Passenger Dashboard service to an         internal property named passengerService

- Inside ngOnInit(), we will subscribe to      the Observable returned by getPassengers()   from the PassengerDashboardService.

```javascript

ngOnInit() {
   this.passengerService
    .getPassengers()
    .subscribe((data: Passenger[]) => this.passengers = data);
}

````

# Complete working flow from the Dashboard component to Service.

- I need the passenger's data in my dashboard component. This data can be injected in my component through a service.

  The ngOnInit initializes the data for us.

  ```javascript

  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
     this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) =>
      this.passengers = data);
  }

  ```

- The getPassengers() method in PassengerDashboardService looks like this. The return value is an **_Observable_** of the type Passenger which can be subscribed to.

```javascript
 constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }


```

- Now the passenger-count component is responsible for displaying the passenger count.

- We bind the data assigned to `this.passengers` to a property like this:
  ```javascript
  <passenger-count
  [items]="passengers">
  </passenger-count>
  ```

# Edit Functionality

- The data is passed down as property bindings to the passenger-detail component.

```javascript
<passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
 </passenger-detail>
```

- In the passenger-detail component, we use the @Input, @Output decorators and an instance of the Event Emitter like this:

```javascript
@Input()
  detail: Passenger;

@Output()
edit:  EventEmitter<Passenger> = new EventEmitter<Passenger>();

toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

```

- Once the event is emitted, we capture it in the Dashboard component.

```javascript

handleEdit(event:Passenger){
this.passengerService.updatePassenger(event)
.subscribe(data:Passenger)=>{
this.passengers=this.passengers.map((passenger:Passenger)=>{
  if(passenger.id===event.id){
    passenger=Object.assign({},passenger,event)
  }
  return passenger
});

});

}
```

In the passenger-service, the ```javascript updatePassenger()``` makes a call to our api 
and returns an Observable

```javascript
updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }
```




