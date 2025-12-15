// Step 0: Import the datejs library.
// This line is required to use the special date formatting features.
// It must be placed at the top of your file, outside of any function.
require('datejs');

/*
 * Task 1 & 2: Define the Problem and Develop the Code
 * 
 * Creates a function that merges all usernames from multiple arrays into one.
 * It also adds the current date to the returned object.
 */
function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  // Create an object with a 'users' property, which is an empty array.
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args
  // The 'args' parameter is an array containing all the arrays passed to the function.
  // For example: combineUsers(['a', 'b'], ['c']) -> args would be [['a', 'b'], ['c']]
  for (const userArray of args) {
    // Step 4: Merge Arrays
    // For each array inside 'args', we use the spread operator (...)
    // to add all of its elements into the 'users' array of our combinedObject.
    combinedObject.users.push(...userArray);
  }

  // Step 5: Get today's date
  // Create a new Date object.
  const today = new Date();
  // Use the datejs library's .toString() method to format the date as "M/d/yyyy".
  const formattedDate = today.toString('M/d/yyyy');

  // Add the formatted date as a new property to our object.
  combinedObject.merge_date = formattedDate;

  // Step 7: Return object
  // Return the final, completed object.
  return combinedObject;
}

// This line exports your function so the test suite can find and test it.
// Do not change this line.
module.exports = {
  combineUsers
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};