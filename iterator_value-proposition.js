/**
 * Let's see how to iterate without the Iterator Protocol 
 * through several data types
 * - String
 * - Array
 * - Object
 * And what is the value proposition of Iterator protocol
 */

const string = "Lorem Ipsum dolor est"
const array = ["Lorem", "Ipsum", "dolor", "est"]
const obj = { 
    value: "Lorem",
    value2: "Ipsum",
    value3: "dolor",
    value4: "est"
}
// Iterating a string
for ( let i=0; i<string.length; i++ ) {
   console.log("Iterating a string", string.charAt(i))
}

// Iterating an array
for ( let i=0; i<array.length; i++ ) {
   console.log("Iterating an array", array[i])
} 

// Iterating an object
const arrayObjKeys = Object.getOwnPropertyNames(obj)

for ( let i=0; i < arrayObjKeys.length ; i++ ) {
    console.log("Iterating an object", obj[arrayObjKeys[i]])
}


/**
 * Using the Iterator protocol
 * The idea here is to 
 * - Increase readbility
 * - A standard way to iterate through objects 
 * as long as they implement the Iterator protocol
 */

const stringIterator = "Lorem Ipsum dolor est"
const arrayIterator = ["Lorem", "Ipsum", "dolor", "est"]
const objIterator = { 
    value: "Lorem",
    value2: "Ipsum",
    value3: "dolor",
    value4: "est"
}

for (const value of stringIterator) {
    console.log(value)
 }
 
 for (const value of arrayIterator) {
    console.log(value)
 }
 
 for (const value of Object.keys(objIterator)) {
    console.log(value)
 }