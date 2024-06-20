// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

/**
  A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
  B) Create a functional iterator for an array that returns each value of the array when called, one element at a time. 
 */

function sumFunc(arr) {
  // Imperative
  // let sum = 0
  // for (let i = 0 ; i < arr.length ; i++ ) {
  //     sum += parseInt(arr[i])
  // }
  // return sum

	// Declarative
  return arr.reduce( (acc, currentValue) => acc += currentValue, 0)
 
}
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
	let i = 0
  
  function next() {
    const value = arr[i]
    i++
    return value
  }
  
  return next
}


// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
 console.log(myIterator()); // -> should log 'a'
 console.log(myIterator()); // -> should log 'b'
 console.log(myIterator()); // -> should log 'c'
 console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

/** 
 Create an iterator with a next method that returns each value of the array when .next is called. 
*/

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0
  
  function next() {
		const currentValue = arr[i]
    i++
    return currentValue
  }
  
  return { next }
}

// Uncomment the lines below to test your work
 const array3 = [1, 2, 3];
 const iteratorWithNext = nextIterator(array3);
 console.log(iteratorWithNext.next()); // -> should log 1
 console.log(iteratorWithNext.next()); // -> should log 2
 console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

/**
 * Write code to iterate through an entire array using your nextIterator and sum the values. 
 */

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
	let sum = 0
  let iteratorFn = nextIterator(arr)
  let next = iteratorFn.next()
  
  while (next) {
		sum += next
    next = iteratorFn.next()
  }
  
  return sum
}

// Uncomment the lines below to test your work
 const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

/**
 * Create an iterator with a next method that returns each value of a set when .next is called 
 */

function setIterator(set) {
  // YOUR CODE HERE
  let i = 0
  let iterator = set.keys()
  
  function next() {
    return iterator.next().value
  } 
  
  return { next }

}

// Uncomment the lines below to test your work
 const mySet = new Set('hey');
 const iterateSet = setIterator(mySet);
 console.log(iterateSet.next()); // -> should log 'h'
 console.log(iterateSet.next()); // -> should log 'e'
 console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

/**
 * Create an iterator with a next method that returns each value of a set when .next is called 
 */

function indexIterator(arr) {
  // YOUR CODE HERE
  let iterator = arr.entries()
  function next() {
    return iterator.next().value
  }
  
  return { next }

}

// Uncomment the lines below to test your work
 const array5 = ['a', 'b', 'c', 'd'];
 const iteratorWithIndex = indexIterator(array5);
 console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
 console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
 console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

 // CHALLENGE 6

/**
 * Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
   Note: if it is the first element it should say that it is the first 
 */

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

/**
 * Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
    Note: if it is the first element it should say that it is the first 
 */

function valueAndPrevIndex(array){

}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

/**
 * Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first 
 */

function* createConversation(string) {


}

console.log(createConversation('english').next());



//CHALLENGE 9

/**
 * Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, 
 * concatenates it with a hard coded verb and returns it to the async function to be console.logged 
 * after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen. 
 */
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");
