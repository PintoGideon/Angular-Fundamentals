# Import the router module

```javascript
import { RouterModule, Routes } from '@angular/router';
```

We can define the routes now.

```javascript
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: NotFoundComponent
  }
];
```

Angular directives are used to extend the power of the HTML by giving it new syntax. Each directive has a name — either one from the Angular predefined like ng-repeat , or a custom one which can be called anything. And each directive determines where it can be used: in an element , attribute , class or comment

Router outlet is a directive via the router which is esentially the placeholder where our component will be injected. When we route to the component, we will then
tell the router component where to go.

### router link

```javascript
<a
routerLink="/"
routerLinkActive="active">
[routerLinkActiveOptions]="{exact:true}">
Home
</a>

```

### Dynamic construction of our navigation.

We will create an interface first

```javascript
interface Nav {
  link: string;
  name: string;
  exact: boolean;
}
```

```javascript
<nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
 </nav>
```

```javascript
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
```

# Adding styling to the nav

```css
.nav {
  margin: 0 0 10px;
  padding: 0 0 20px;
  border-bottom: 1px solid #dce5f2;
  a {
    background: #3a4250;
    color: #fff;
    padding: 4px 10px;
    margin: 0 2px;
    border-radius: 2px;
    &.active {
      color: #b690f1;
      background: #363c48;
    }
  }
}
```

# Adding child routes

```javascript
const routes: Routes = [
  {
    path: 'passengers',
    children: [
      { path: '', component: PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];
```

### Use Route Params

Contains the information about a route associated with a component loaded in an outlet. An ActivatedRoute can also be used to traverse the router state tree.

```javascript
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
  }

```

The main difference between switchMap and other flattening operators is the cancelling effect. On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed. You can remember this by the phrase switch to a new observable.

This works perfectly for scenarios like typeaheads where you are no longer concerned with the response of the previous request when a new input arrives. This also is a safe option in situations where a long lived inner observable could cause memory leaks, for instance if you used mergeMap with an interval and forgot to properly dispose of inner subscriptions
