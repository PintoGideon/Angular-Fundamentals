```javascript

<template ngFor let-passanger let-i="index">
<li>
{{i}}:{{passenger.fullname}}
</li>
</template>
```

# ng syntax

```javascript

<li *ngFor="let passenger of passengers; let i=index">
{{i}}:{{passenger.fullName}}
</li>
```
