# Triable
Get an object's props without check if the prop exist

## How to use
```
var Triable = require('triable');
var foo = {
  bar: {
    foobar: 'test'
  }
}
var instance = new Triable(foo);
instance.try('bar').try('foobar').getValue(); //=> test
instance.try('bar').try('foobar').try('something').try('somethingelse').getValue(); //=> undefined
```
