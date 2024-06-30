// Creating our first Iterator

function Words(str) {
    this.str = str
  }
  
Words.prototype[Symbol.iterator] = function() {
   const words = this.str.split(/\s/)
   let index = 0
   function next() {
     const value = words[index]

     if(index < words.length) {
        index++
          return {
            value,
                    done: false
          }
     }
     return {
       value,
         done: true
     }
   }

   return { next }
}

const words = new Words("Lorem Ipsum dolor est")

for (const word of words) { 
   console.log(word)
}


// Creating an Iterator function with new keyword
function iterator(arr) {
    this.i = 0
    this.arr = arr
 }
 
 iterator.prototype[Symbol.iterator] = function () {
     const next = () => {
     const value = this.arr[this.i]
         if (this.i < this.arr.length) {
         this.i++
         return { value, done : false }
             }
         return { value, done : true }  
    }
    return { next }
 }
 
 
 const arrayIterable = new iterator([5,6,7])
 for (const value of arrayIterable)
    console.log(value) 

 // Creating an Iterator function with class keyword

 class Iterator {
    constructor(arr) {
      this.arr = arr
      this.i = 0
    }
 
    [Symbol.iterator]() {
       return { 
           next: () => { 
             const value = this.arr[this.i]
                         if (this.i < this.arr.length) { 
                             this.i++
                             return { value, done: false }
                         }
             return { value, done: true }
           }
       }
    }
 }
 
  const arrayIterable = new Iterator([5,6,7])
  for (const value of arrayIterable)
     console.log(value)