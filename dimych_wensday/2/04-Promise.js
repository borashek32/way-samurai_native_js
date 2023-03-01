console.log(1)
const promise = new Promise((resolve, reject) => {
    resolve()
    console.log(2)
})

promise.then( () => {
    console.log(4)
})

console.log(3)
