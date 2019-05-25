### Pipes can be thought of functions that return something new.

```javascript
function uppercase(string) {
  return string.upperCase();
}

var name = uppercase('todd');
console.log(name);
```

Pipes can be thought of as a data transformation
mechanism which Angular will run internally for you.


