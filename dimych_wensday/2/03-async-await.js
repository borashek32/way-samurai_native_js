const run = async () => {
    console.log('0')
    let dataFromGoogle;
    let dataFromYandex;
    let dataFromBing;

    try {
        dataFromGoogle = await fetch('https://goddddogle.com/?query=js')
    } catch (error) {
        console.log('ERROR FROM GOOGLE')
    }
    try {
        dataFromYandex = await fetch('https://yandex.com/?query=js')
    } catch (error) {
        console.log('yandex some error')
    }
    try {
        console.log('response from yandex');
        dataFromBing = await fetch('https://bing.com/?query=js')
        console.log(dataFromBing)
    } catch (error) {

    }
    console.log(dataFromGoogle, dataFromYandex, dataFromBing)
    console.log('1')
}

run();

const run2 = async () => {
    console.log('0')
    try {
        const dataFromGoogle = await fetch('https://goddddogle.com/?query=js') // then
       // then callback started
        const dataFromYandex = await fetch('https://yandex.com/?query=js')
        console.log('response from yandex');

        const dataFromBing = await fetch('https://bing.com/?query=js')
        console.log(dataFromGoogle, dataFromYandex, dataFromBing)
        // callback finished
    } catch (error) { // catch callback
        console.log("SOMETHING WRONG. RELOAD PAGE")
    }
    finally {
        console.log('WILL BE CALLED IN ANY CASE')
    }
    console.log('1')
}

const promise = run2();

const someF = async = () => {
    return 1
}
const onePromise = someF()
onePromise.then(one => console.log(one))


const someF2 = async = () => {
    return fetch('https://google.com/?query=js');
}

const xxx = someF2();
xxx.then((dataFromGoogle) => {})
