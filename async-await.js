async function createFlow() {
    console.log("Me first")
    const data = await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(data)
}

createFlow()
console.log("Me second")

// Async as IIFE

(async function () {
    console.log("Me first")
  const data = await fetch("https://dog.ceo/api/breeds/image/random")
  console.log(data)
})()