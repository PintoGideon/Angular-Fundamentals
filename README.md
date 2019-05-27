# Angular Architecture

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)




### I have included a README.md file with topic specific notes in each of the lecture's folder.

### How does the change detection in Angular really work?

Angular can detect when component data changes, and then automatically re-render the view to reflect that change. But how can it do so after such a low-level event like the click of a button, that can happen anywhere on the page?

### Overriding Browser's Default Mechanisms

To understand how this works, we need to start by realizing that in Javascript the whole runtime is overridable by design. What happens is that Angular at startup time will patch several low-level browser APIs, such as for example addEventListener, which is the browser function used to register all browser events, including click handlers. Angular will replace addEventListener with a new version 

The new version of addEventListener adds more functionality to any event handler: not only the registered callback is called, but Angular is given a chance to run change detection and update the UI.

### How does the default change detection mechanism work?
This method might look strange at first, with all the strangely named variables. But by digging deeper into it, we notice that it's doing something very simple: for each expression used in the template, it's comparing the current value of the property used in the expression with the previous value of that property.

If the property value before and after is different, it will set isChanged to true, and that's it! Well almost, it's comparing values by using a method called 
looseNotIdentical(), which is really just a === comparison with special logic for the NaN case

### Modules
Building Blocks that contain
routes, components, services
and more
![Angular arch 2](https://user-images.githubusercontent.com/15992276/58364394-c0adb000-7e81-11e9-80ac-5a7d909f88aa.JPG)
![Angular Arch](https://user-images.githubusercontent.com/15992276/58364395-c0adb000-7e81-11e9-95d0-3ec43d1dde85.JPG)

![Smart Components](https://user-images.githubusercontent.com/15992276/58364400-c1464680-7e81-11e9-8b2d-103e98ea2764.JPG)



An App can be divided into components. For
a chat app we can have 3 components
- search
- navigation panel to the left
- an inbox to the right

### Components

Contains a template, data and logic forming
part of a DOM tree.

Component is a higher level tree node
which can have it's own sub tree node.

### Directives

Attach Behaviour, extends or transform
a particular element and it's children/


### Services

Data layer, logic that is not
componet related, such as 
API requests.


### Routing

Renders a component based on the
URL state, drives navigation

### Container and Presentational Components

If we add a service to the component to give
it some data, we call it a smart component.

Now the smart component contains all the other component that do not know about this data 
and the component can pass the data.

***Smart/Container Component***
Communicates with services and renders child
components.

### One-way data flow

Angular has an event emitter built which can
be used by a child component to notify a parent
component of any changes.

Data flows down, events emit up.

### Snapshots of the Final Airline Passenger App
 
 - Home Page
![Home Page 1](https://user-images.githubusercontent.com/15992276/58393524-119ddf80-800d-11e9-9e1a-47a1ceec354c.JPG)

- Edit Functionality

![Persisting state-1](https://user-images.githubusercontent.com/15992276/58393525-119ddf80-800d-11e9-9a5c-f86f18ec20f5.JPG)
![Persisting state-2](https://user-images.githubusercontent.com/15992276/58393526-119ddf80-800d-11e9-8bbe-e96ce0ceaa32.JPG)

![Edit a Passenger](https://user-images.githubusercontent.com/15992276/58393522-11054900-800d-11e9-8f7f-a597deababe9.JPG)

- Form to Update a Passenger
![Update a Passenger](https://user-images.githubusercontent.com/15992276/58393529-119ddf80-800d-11e9-88e8-890e051fa861.JPG)

- An Example of Form input
![Form input](https://user-images.githubusercontent.com/15992276/58393523-119ddf80-800d-11e9-8214-db6430e971c7.JPG)

- Delete Functionality 
![Remove A Passenger](https://user-images.githubusercontent.com/15992276/58393527-119ddf80-800d-11e9-8624-d699f80a59a3.JPG)







