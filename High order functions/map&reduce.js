/*
ES6 Javascript.
Just like filter map is another higher order function, also like filter it goes through
an array but unlike filter it does not through the items away, instead it tranform them.
Map will take a callback function just like filter does. The callback function will pass each item
in the animals array.
How is map different from filter?
Filter expects its callback function to return a true or false value that determines wether or not the items
should be included on the array or not.
Map will include all the items in the array but instead expects its callback fuction to return a tranformed object that
will put into the new array instead of the orignal animal. In this case that would be the name(property).
Map expects the callback to return any Object. Map return a subset of an Object.
*/

var animals = [
  { name: 'Fluffykins', species: 'rabbit'},
  { name: 'Caro', species: 'dog'},
  { name: 'Hamilton', species: 'dog'},
  { name: 'Harold', species: 'fish'},
  { name: 'Ursula', species: 'cat'},
  { name: 'Jimmy', species: 'fish'}
]

//How we will solve this using a for loop.
var names = []; for (var i = 0; i < animals.length; i++) {names.push(animals[i].name) }

console.log(names);

//using map method
var names = animals.map(function(animal) {return animal.name} )

// writen with harmony arrow fat functions
var names = animals.map((animal) => animal.name)
//even shorter
var names = animals.map((x) => x.name)
