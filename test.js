
const AbstractClass = require("./abstract.js");

class Parent extends AbstractClass {

    constructor() {
        super(Parent, ["test"]);
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

var c = new Child();
c.test();
