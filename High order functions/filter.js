function triple(x) {
  return x * 3
}
//this is the same as:

var triple = function(x) {
  return x * 3
}
/*JS creates an anonymous function and assigns it to a variable.
In functional programming functions are values.
Just like string or numbers, functions can be assigned to variables
Or passed to other functions, also know as higher order functions
What are higher order functions good for? Composition.
We can take a function and put it into another function.
The most basic higher order function is Filter.
Filter is a function on the array object that sets another function as its argument,
which it will use to return a new filter version of the Array. Look following example: */

var animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Caro', species: 'dog'},
  { name: 'Hamilton', species: 'dog'},
  { name: 'Harold', species: 'fish'},
  { name: 'Ursula', species: 'cat'},
  { name: 'Jimmy', species: 'fish'}
]

//how to do it with a normal for loop:

var dogs = []; // creates an array to hold the dogs
for (var i = 0; i < animals.length; i++) { //it iterates through all the items in the array.
  if (animals[i].species) === 'dog') // if the species of the animals being iterated equals to dog
  dogs.push(animals[i]) // it will push that dog into the animals array.
}

// how to  do with filter.
var dogs = animals.filter(function(animal) { //filter acceps one argument that is another function. *
  return animal.species === 'dog'
})

/* *functions that are send into other functions are called Callback functions because the host function in
this case fiter will call back to them.
~Filter~ is a method on the array object, that takes another functions as its argument. And use it that function to filter the array.
Filter will loop through each item in the array and for each item is going to pass it into the callback function.
And when it does, it will expect the the callback function to return either true or false to tell filter whether or not
this item should be in the new array. When it finish it will return the new filter array that will be dogs.
*/

// Breakout the call back into a separate variable. isDog is just a function that checks that an object is a dog. Is completely decouple from filter so we can use it for other things.
var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog) //gives animals that aren't dogs. Reject is another high order function on the array object.
