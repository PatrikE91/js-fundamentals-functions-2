// 1. Create a function named bakingTime that returns 50
function bakingTime() {
  return 50
}

console.log(bakingTime())
// 2. Create a function named remainingBakeTime that accepts one parameter:
// - the number of minutes your cake has been in the oven.
//
// It must return how many minutes your cake has left based on your parameter
// and the result of the bakingTime function
function remainingBakeTime(timeInTheOven) {
  timeLeft = bakingTime() - timeInTheOven
  return timeLeft
}
console.log(remainingBakeTime(2))

// 3. Create a function named calculatePreparationTime that accepts one parameter:
// - the number of layers your cake has
//
// It must return how many minutes it will take to prepare your cake, based on
// each layer taking 3 minutes to prepare
function calculatePreparationTime(numLayers) {
  const layer = 3
  let totTimeLayer = layer * numLayers

  return totTimeLayer
}

console.log(calculatePreparationTime(3))
// 4. Create a function named totalTimeSpent that accepts two parameters:
// - the number of layers your cake has
// - the number of minutes the cake has already been baking in the oven
// It must return how many minutes in total you have spent making the cake,
// which is the sum of the preparation time and the number of minutes it's been in the oven.
// Use your calculatePreparationTime function in the calculation.

function totalTimeSpent(layers, inTheOven) {
timeSpent = calculatePreparationTime(layers) + inTheOven

  return timeSpent
}

console.log(totalTimeSpent(2, 20))

// Don't change the code below this line
module.exports = {
  bakingTime,
  remainingBakeTime,
  calculatePreparationTime,
  totalTimeSpent
}
