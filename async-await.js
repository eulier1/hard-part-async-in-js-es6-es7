function doWhenDataReceived(data) {
    returnNextElement.next(data)
}

function* createFlow() {
    const data = yield fetch("https://dog.ceo/api/breeds/image/random")
    console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next().value
futureData.then(doWhenDataReceived)