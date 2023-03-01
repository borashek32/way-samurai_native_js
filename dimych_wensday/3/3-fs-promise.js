const fs = require('fs');

const readAsync = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                rej(error)
            } else {
                res(data);
            }
        });
    })
}

async function runRead() {
    const [data1, data2] = await Promise.all([
        readAsync('db.json'),
        readAsync('db2.json')
    ])
    // merge(data1,data2)
}

async function runWrite() {
    const isDirExists = await isDirExistsAsync('database')
    if (!isDirExists) {
        await createDirAsync('database')
    }
    await writeAsync('database/db.json', JSON.stringify([{id: 3, title: 'webstorm'}]))
    console.log('success')

}

// calbackhell

//read();
//createDir();
//write();
fs.exists('database', (isExists) => {
    if (!isExists) {
        fs.mkdir('database', (err) => {
            if (err) {
                console.error(err);
            }
            write();
        })
    } else {
        write();
    }
})

function read() {
    fs.readFile('db.json', 'utf8', (_, data1) => {
        console.log(data1);

        fs.readFile('db2.json', 'utf8', (_, data2) => {
            console.log(data2);
            // merge(data1, data2)
        });
    });
}

function createDir() {
    //if ()
    fs.mkdir('database', (err) => {
        if (err) {
            console.error(err);
        }
        write();
    })
}

function write() {
    fs.writeFile('database/db.json', JSON.stringify([{id: 3, title: 'webstorm'}]), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}


// object to string serialization
// object to byte[] serialization
