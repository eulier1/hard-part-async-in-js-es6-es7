import { waitWithCallback } from "callbacks";

export const waitWithPromise = (timer) => new Promise( (resolve, reject) => {
    waitWithCallback(timer, resolve)
})

// Promise come here to the rescue to make callbacks at one level

waitWithPromise(2000)
.then(
    () => { console.log('1st Promise - 2s'); return waitWithPromise(1000) } 
)
.then(
    () => { console.log('2st Promise - 3s'); return waitWithPromise(1000) }
)
.then(
    () => console.log('Final Promise Done  4s')
)