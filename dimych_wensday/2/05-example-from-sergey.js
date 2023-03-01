const prom = new Promise((res, rej) => {
    res(1)
})
prom
    .then(() => {
        console.log('1') // mt
    })
    .then(() => {
        console.log('2') // mt
    })
    .then(() => {
        console.log('3')
    })

/*const prom2 = new Promise((res, rej) => {
    res(1)
})*/
prom
    .then(() => {
        console.log('4') // mt
    })
    .then(() => {
        console.log('5')
    })
    .then(() => {
        console.log('6')
    })

function a(x) {
    console.log(x)
}
function b(y) {
    console.log(y)
    return 100
}
function c() {
    console.log("c")
    return 10
}

a(b(c()))
