# Create a Component and Register that component

The selector essentially create the element in html. All our angular applications have a base root component which renders our application.

Our component decorator essentially gets bound to the app component. Anything that is exporsed from the app component can be accessed in the component decorator.

The Ng module decorator is used to create our Angular module.

```javascript
import { NgModule } from '@angular/core';
```

We want to bootstrap our AppComponent as well as register it in the Module. Because we want to build a browser Application, we are going to import our BrowserModule.
We are also going to import the common module.

```javascript
@NgModule({
bootstrap:[AppComponent]
})

```

We will import **_platformBrowserDynamic_** to
comile our code in the browser.

# Summary

- We register our component in the app.component.ts as an app-root in index.html.
- To Bootstrap the component, we have to import it in a module, tell the module to
  boostrap it and in the main.ts, we can tell
  the compiler to bootstrap our application module.

# Property Binding

- Property binding is how we can pass data from a component class to templates by binding it to a particular element.

```javascript

<h1>{{title}}</h1>

```

The curly braces are called as sugar syntax. All this is doing is setting the innerHTML of that particular content. 

```javascript
<h1 [innerHTML]="title">
```

Data comes down from the class, binds to the
template and looks at the innerHTML property
and set the innerHTML content.


### Refs

```javascript
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Gideon';
  handleClick(value: string) {
    console.log(value);
  }

  constructor() {}
}

```

```#username``` is a reference to the DOM node. When we pass into the click function and get the value, we get the value entered in the text box.







