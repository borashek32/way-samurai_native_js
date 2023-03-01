const fs = require('fs');

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

function write() {
    fs.writeFile('database/db.json', JSON.stringify([{id: 3, title: 'webstorm'}]), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}

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




// object to string serialization
// object to byte[] serialization
