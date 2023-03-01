const promise = fetch('https://google.com')
const promise2 = promise.then((data) => {
    return 5
})

promise2
    .then((five) => console.log(five))
    .then(() => {
        const promise = fetch('https://google.com')
        return {
            promise: promise,
            value: 5
        }
    })
    .then((obj) => {
        console.log(obj.value)
        return obj.promise
    })
    .then((dataFromObjPromise) => {

    });
