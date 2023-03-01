fetch('https://google.com/?query=js')
    .then(() => {
        console.log("response from google")
        return fetch('https://yandex.com/?query=js');
    })
    .then( (dataFromYandex) => {
        console.log("response from yandex")
        return fetch('https://bing.com/?query=js');
    })
    .then((dataFromBing) => {
        console.log("response from bing")
    })


fetch('https://google.com/?query=js')
    .then(() => {
        console.log("response from google")
        return fetch('https://yandex.com/?query=js');
    })
    .then( (dataFromYandex) => {
        console.log("response from yandex")
        return fetch('https://bing.com/?query=js');
    })
    .then((dataFromBing) => {
        console.log("response from bing")
    })
/*
fetch('https://google.com/?query=js')
    .then((dataFromGoogle) => {
        console.log('response from google')
    })
fetch('https://bing.com/?query=js')
    .then((dataFromBing) => {
        console.log('response from bing')
    })
fetch('https://yandex.com/?query=js')
    .then((dataFromYandex) => {
        console.log('response from yandex')
    })
*/

/*setTimeout(() => {
    console.log(1)
}, 2000)
setTimeout(() => {
    console.log(2)
}, 2000)
setTimeout(() => {
    console.log(3)
}, 2000)*/

/*
const pr1 = fetch('https://google.com/?query=js')
const pr2 = fetch('https://bing.com/?query=js')
const pr3 = fetch('https://yandex.com/?query=js')

const superPromise = Promise.all([pr1,pr2,pr3])

superPromise.then((arrayWithDataFromAllPromises) => {
    arrayWithDataFromAllPromises[0]
    arrayWithDataFromAllPromises[1]
    arrayWithDataFromAllPromises[2]
})*/


const superPromise = Promise.all([
    fetch('https://google.com/?query=js'),
    fetch('https://bing.com/?query=js'), // error
    fetch('https://yandex.com/?query=js')
])

superPromise.then((arrayWithDataFromAllPromises) => {
    arrayWithDataFromAllPromises[0]
    arrayWithDataFromAllPromises[1]
    arrayWithDataFromAllPromises[2]
})

const superPromise = Promise.allSettled([
    fetch('https://google.com/?query=js'),
    fetch('htps://bing.com/?query=js'), // error
    fetch('https://yandex.com/?query=js')
])

superPromise.then((arrayWithDataFromAllPromises) => {
    if (arrayWithDataFromAllPromises[0].status === 'fulfilled') {}
    if (arrayWithDataFromAllPromises[1].status === 'fulfilled') {}
    if (arrayWithDataFromAllPromises[2].status === 'fulfilled') {}
})
