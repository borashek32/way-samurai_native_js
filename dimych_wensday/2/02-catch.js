console.log('0')
const promiseFromCatch = fetch('https://goddddogle.com/?query=js')
    .catch(() => {
        console.log('ERROR FROM GOOGLE')
        return new Error(`google doesn't respond`)
    })
    .then((data) => {
        if ( data instanceof Error) {
            console.log("error: ", data.message);
        }
        return fetch('https://yandex.com/?query=js')
    })
    .catch(() => {
        console.log('yandex some error')
        return 10
    })
    .then((data) => {
        console.log("response from yandex");
        return fetch('https://bing.com/?query=js')
    })
    .then((dataFromBing) => {
        console.log("response from bing");
    })
    .catch(() => {
        console.log("ERROR from some promise");
    })

console.log('1')
