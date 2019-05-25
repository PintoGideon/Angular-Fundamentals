# Angular Architecture

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)


### I have included README.md file of my note in each of the lecture's folder.

### Modules
Building Blocks that contain
routes, components, services
and more

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

