# abstract-js

Abstract class enforcement in JS

## Getting Started

Simply import the module as a class. To create an abstract class, use the imported module as its superclass.

```javascript
const AbstractClass = require("abstract-class-js");

class Parent extends AbstractClass {

    constructor() {
        super(Crawler, ["test"]);
    }

}

class Child extends Parent {
    constructor(){
        super();
    }
    test(){
        console.log("Hello, World!");
    }
}
```

## Errors

An attempt to initiate an abstract class will result an error.
```
Error: Abstract class Parent cannot be cannot be instantiated without a subclass implementation.
```


An incomplete implementation of a class will result an error as well.
```
Error: Classes extending abstract class Parent must implement test
```
