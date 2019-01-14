///////////////////////////////////////
// Lecture: Hoisting

// functions

// this still works - it is hoisting
// hoisting only works for function declaration
/*
calculateAge(1996);

// declare the function and call the function
function calculateAge(year){
    console.log(2019 - year);
}

// hoisting is not working for function`s expression

// retirement(1996); not working

var retirement = function(year){
    console.log(63 - (2019 - year));
} 

retirement(1990); 

// variables
 console.log(age); // undefined 
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/

///////////////////////////////////////
// Lecture: Scoping

// scoping answers the guestion where we can access a certain variable

// each new function creates a scope

// First scoping example
/*

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// print Hello!Hi!Hey!

/*
execution stack is the order in which functions are called
*/

/*
scope chain is the order in which functions are writted lexically
*/
// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
   // console.log(c);
   console.log(a + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

/*
In a regular function call, the this keyword points at the global
object (the window object, in the browser)

In method call, the this variable, points to the object that is 
calling the method.

The this keyword is not assigned a value until a function where is defined is actually called.

*/

// console.log(this);

calculateAge(1996);

function calculateAge(year){
    console.log(2019 - year);
    console.log(this); // this poins to the Window object here
}

var john = {
    name: 'John',
    yearOfBirth: 1996,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
/*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
 */       
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1993

};

// method borrowing is done without parentheses
mike.calculateAge = john.calculateAge;
mike.calculateAge();