/*
What is a Function?
- Block of code that you can "call" (JS execute)
- Unique name
- Can receive data (parameter/argument)
- Can return data
- Scope

Tips:
- Choose consicese, decriptive names.

Best Practices:
- Functions should only do one thing.
- Avoid using global variable inside your function. 
*/

function greet() {
  //body of the Function
  alert('Hello');
}
greet(); //calling the function to execute the body of the function.

//Functions can receive data (parameter/argument)
function greet(name) {
  alert('Hello, ' + name);
}
name = 'Rodrigo'; //outside the function this will not work
greet('Rodrigo'); //first option, data can be sent directly to the function.

//second option
function greet(name) {
  alert('Hello, ' + name);
}
var myName = 'Rodrigo';
greet(myName);

//Function can receive multiple parameters.
function greet(greeting, name) {
  alert(greeting + ', ' + name);
}
greet('Hello', 'Rodrigo');

//Functions can return data.
function greet(greeting, name) {
  return greeting + ', ' + name;
}
var msg = greet('Hello', 'Rodrigo');
alert('Message: ' + msg);

//Scope
function greet(name) {
  var greeting = 'Hello'; //this variable belongs to this function. The scope is local or visibility is local to this function.
  return greeting + ', ' + name;
}
var msg = greet('Rodrigo');
alert(msg);
//last two lines can be combine as
alert(greet('Rodrigo'));

//Local Scope:
function greet(name) {
  var greeting = 'Hello'; //this variable belongs to this function. The scope is local or visibility is local to this function.
  return greeting + ', ' + name;
}
alert(greeting);

/*this will return greeting is not defined.
Because a variable created inside a function, has a local scope to that function.
If create the variable outside the function like on line 57, then is visible to every function and the scope of that function will be Global.
*/

//Golbal Scope:
var greeting = 'Hello'; //global variable visible to the function.
function greet(name) {
  return greeting + ', ' + name;
}
alert(greeting); // will return 'Hello'
alert(greet('Josh'));
