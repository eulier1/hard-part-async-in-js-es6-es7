// Creating our first Iterator

function Words(str) {
    this.str = str
  }
  
Words.prototype[Symbol.iterator] = function() {
   const words = this.str.split(/\s/)
   const index = 0
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