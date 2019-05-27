The **_FormControl_** instance tracks the value, user interaction, and validation status of the control and keeps the view synced with the model. If used within a parent form, the directive also registers itself with the form as a child control.

This directive is used by itself or as part of a larger form. Use the ngModel selector to activate it.

It accepts a domain model as an optional Input. If you have a one-way binding to ngModel with [] syntax, changing the value of the domain model in the component class sets the value in the view. If you have a two-way binding with [()] syntax (also known as 'banana-box syntax'), the value in the UI always syncs back to the domain model in your class.

To inspect the properties of the associated FormControl (like validity state), export the directive into a local template variable using ngModel as the key (ex: #myVar="ngModel"). You then access the control using the directive's control property, but most properties used (like valid and dirty) fall through to the control anyway for direct access. See a full list of properties directly available in AbstractControlDirective.

```javascript
#fullname="ngModel"
```

We are exporting the ngModel which is keeping an eye on
the validations states.
The value of required can be true or null hence we use a safe navigation operator.

```javascript
<div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger ID is required
        </div>
```

**_dirty_** property means that the form's control property has
changed. At run time the dirty property value will be false if the user has not interacted with the form.

# Complete data flow

```javascript
<form
      (ngSubmit)="handleSubmit(form.value, form.valid)"
      #form="ngForm"
      novalidate
    >
```

### Submit the form

- The user should be able to submit this form after filling it in. The Submit button at the bottom of the form does nothing on its own, but it will trigger a form submit because of its type (type="submit").
  A "form submit" is useless at the moment. To make it useful, bind the form's ngSubmit event property to the hero form component's onSubmit() method:

### Create the handleSubmit function to emit an event to the parent component

```javascript
handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
```

### Emit the event

```javascript
  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();
```

### Event bubbles up to the Parent Component

```javascript
<div>
      <passenger-form [detail]="passenger">
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
```

### Update the passenger in the domain model using our Service

```javascript
onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((date: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
```

### In our Passenger Service

```javascript
const PASSENGER_API: string = '/api/passengers';

updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

```

### Updates our view

```javascript

passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data));
  }
```
