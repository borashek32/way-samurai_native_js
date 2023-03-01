/*setTimeout(() => {
    console.log('1')

    setTimeout(() => {
        console.log('2')
    }, 2000)

}, 2000)*/

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}


delay(2000)
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })

delay(2000)
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(4);
    })


