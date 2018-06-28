/*Recap: map, filter, and reject transform a list into something else.
animals map => animalNames (map will take an array and transform that into an array of the same length but with each individual item transform )
animals filter => dogs (filter transform an array into a smaller array)
animals reject => no dogs (reject does the same as filter but inverted)
animals find=> Fluffykins the rabbit (does the same as filter but returns the first item so it tranform an array into a single item)
Reduce is a super list transformation that can be used if you cannot find a prebuilt list tranformation that fits your problem.
*/

var orders = [
  {amount : 250},
  {amount : 400},
  {amount : 100},
  {amount : 325}
]

//for loop
var totalAmount = 0
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount //for every order we take the amount is added to totalAmount.
}

console.log(totalAmount)

//Reduce takes a callback function like map and filter but unlike map and filter it wants an OBJECT
//object is the starting point for the sum, this sum is the first argument for the callback function

var totalAmount = orders.reduce(function(sum, order){
  console.log("hello", sum, order)
  //echo out the sum and the order that we are getting in.But this is jus to show how it works, reduce method doesnt have console.log
  return sum + order.amount // sum starting point is 0 and adds it to first order amount. The return value will became the sum for the next situation.
}, 0)
