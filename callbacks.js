export const waitWithCallback = (timer, cb) =>  {
    setTimeout( () => cb(), timer)
}

// Piramyd of DOOM or the callback hell
waitWithCallback(1000, ()=> {
    waitWithCallback(1000, ()=> {
        waitWithCallback(1000, ()=> {
            waitWithCallback(1000, ()=> {
                console.log('4s Callback')
            })
        })
    })
})
