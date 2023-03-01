// 1. !!! pr - { _state: 'pending'|'fullfilled'|'rejected', then, catch, finally  }  // publisher-subscriber
// 2. !!! const pr = new Promise()
// const fetchPromise = fetch('http://')

const pr = new Promise((resolve, reject) => {
    // !!! что-то оборачиваем в промис, просто чтобы было удобнее работать
    // чаще всего мы оборачиваем асинзронные операции, потому что если они изначально не поддерживают промисы,
    // то с ними приходится работать через callbacks -> callbackhell
})

// _ _ _ _ _ _ _ _ _
//   e     e       e

/*setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('1')
        }, 3000)
    }, 2000)
}, 1000)*/

delay(1000)
    .then((num1) => console.log(num1))
    .then(() => delay(2000))
    .then((num2) => {
        console.log(num2)
        if (num2 < 0.1) {
            throw new Error('balance is very small'); // ****
            return Promise.reject('balance is very small') // ****
            //return new Promise((res, rej) => rej('balance is very small'))
        }

    })
    .then(() => delay(3000))
    .then((num3) => console.log(num3))
    .catch((err) => {
        console.log(err); // ошибка, которая произошла где-то выше
        // либо в обработчике
        // либо один из промисов в цепочке зареджектился (по сути ошибка произошла в самом промисе)
    })

async function run() {
    try {
        const num1 = await generateRandomNumberWithDelay(1000)
        console.log(num1)
        const num2 = await generateRandomNumberWithDelay(2000)
        console.log(num2)
        const num3 = await generateRandomNumberWithDelay(3000)
        console.log(num3)
    } catch (error) {
        console.log(error)
    }
}


run()

// signature or interface
function generateRandomNumberWithDelay(ms) {
    const promise = new Promise((res,reject) => {
        setTimeout(() => {
            res(Math.random())
        }, ms)
    })
    return promise;
}

// Promise.all,

const allPromise = Promise.all([
    generateRandomNumberWithDelay(2000),
    generateRandomNumberWithDelay(1000),
])

allPromise.then((array) => {
    console.log(array[0]) // result from first promise in array
    console.log(array[1]) // result from second promise in array
})

const promise = api.getUsers();

const api = {
    async getUsers() {
        await delay(2000)
        return [{id:1, name: 'dimych'}]
    }
}

const repository = {
    findUsers() {
        return delay(2000)
            .then(() => {
                return [{id: 1, name: 'dimych'}];
            })
    }
}
