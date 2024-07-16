/*
Script Number Two:

In JavaScript, you can declare a variable in three different ways: using var, let, and const.

The problem is that const, despite its name, allows you to change the properties of an object when used with one:

const myObject = { "foo": "bar" };
myObject.foo = null;
myObject.property = "I can add new fields";

Task: Create a function that takes an object as input and returns the same object, but with all modifications disabled (i.e., you can't change the value of existing properties, add new ones, or delete any).

Example:
const createImmutableObject = function(input) { ... };
const myObject = createImmutableObject({ "foo": "bar" });
myObject.foo = null; // doesn't change the value of the existing prop
myObject.property = "I can't add new fields"; // doesn't add a new prop to the object
*/
// "use strict";

const createImmutableObject = function (inputObject) {
    let result = {}

    for (let key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            Object.defineProperty(result, key, {
                value: inputObject[key],
                writable: false,
                configurable: false,
                enumerable: true
            })
        }
    }
    Object.preventExtensions(result)
    return result
}

const myObject1 = createImmutableObject({ 'foo': 'bar' })

myObject1.foo1 = null
myObject1.property = "I can add new fields"