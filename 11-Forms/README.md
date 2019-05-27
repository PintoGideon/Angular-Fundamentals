# Creating a Form

```javascript
<form #form="ngForm" novalidate>

</form>
```
The piece of code above exports the ngform which is an angular directive which works under the hood to essentially keep track of all of the state changes and all the validation of the inputs inside the form.

We can use ngModel as a standalone attribute which is actually a directive from angular.
The passenger detail object is being passed into the form and we want to manipulate use passenger detail using form inputs.

ngModel synchronizes the data between the input box and the detail object. However the passenger detail in our database won't change as we are using template driven forms. The template is the single soure of truth here.

If we want to set an initial value we can bind the ngModel(code snippet below). We are use a safe navigation operator because detail.fullname is an asynchronous call and won't be available initially.

```
[ngModel]="detail?.fullname"
```

### ```javascript <select>``` option rendering and ngValue

### HTML select attribute

```javascript

<select name="carlist" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

```

### Using the select attribute in Angular

- Exposing an interface called Baggage and both the values in
  it are strings

```javascript
export interface Baggage {
  key: string;
  value: string;
}
```

```javascript

<select
name="baggage"
[ngModel]="detail?.baggage"
>
<option
*ngFor="let item of baggage">
[value]="item.key"
[selected]="item.key===detail?.baggage">
{{item.value}}
</option>
</select>

```

The selected property is set by Angular on the DOM holding the default value.


