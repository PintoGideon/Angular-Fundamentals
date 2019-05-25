Lifecycle hook is a function called by Angular
when something happens.

**_OnInit lifecycle_** hook is used when the component
is initialized. When our component is ready, Anguar will call our OnInit function for us.

# Workflow

Create a new instance of an event emitter. Bind a custom event emitter to our property. This allows us to fire a custom event.

We have our passenger component
We are looping over them. We are passing each passenger into
the detail. When we locally edit the passenger, we press the
remove button. We then fire an event from the child and the parent get's notified in the handleRemove function.

# OnChanges life cycle hook

Because Angular is giving us an array as a referece rather
than a value. When we change a value in the local component,
it is actually changing the original value in the parent component.

ngonchanges can be used to fix this issue.

The onChanges object will have a current value and a previous value.

ngOnChanges gets called before ngOnInit which means the bindings and the data is available on the onChanges before the component is intialized which allows us to intercept the binding.

We create a clone of the detail object and reassign it to itself. Now the parent value is not updated while the user types in the input box. It is only updated when user click on the 'done' button