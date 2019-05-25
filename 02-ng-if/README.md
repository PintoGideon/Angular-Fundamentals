### ngIf directive

Directives can be attached to components or their templates.
Angular basically sits on the top of the web
platform so we can use Shadow DOM.

The template is a web component piece of HTML
that can be used elsewhere or used multiple times.

```javascript
<template [ngIf]="name.length>2">
<div>
searching for...{{name}}
</div>
</template>

```

### Sugar Syntax

```javascript

<div *ngIf="name.length>2">
Searching for ....{{name}}
</div>
```
