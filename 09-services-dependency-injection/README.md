The keyword **_private_** tells typescript that the function should not be called publicly.

```javascript
constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }

```
Angular binds the PassengerDashboardService to an internal property called passengerService. 
In this lecture, we created a static service
and used it in our passenger dashboard component by binding to an alias.















