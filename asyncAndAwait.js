import { waitWithPromise } from "promises";

// Promise are fine, but we still need a way to improve readability
// await/async comes to the rescue

await waitWithPromise(1000)
await waitWithPromise(1000)
await waitWithPromise(1000)
await waitWithPromise(1000)
console.log('Top level asyn/await 4s ')

console.log(import.meta)