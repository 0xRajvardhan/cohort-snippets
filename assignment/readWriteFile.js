const fs = require('fs')

function readFile() {
    fs.readFile("example.txt", 'utf-8', (err, data) => {
        console.log("read the file successfully! Here's the data: " + data)
    })
}

function writeFile() {
    fs.writeFile("example.txt", 'File changed', 'utf-8', (err)=>{
        console.log("File updated Successfully!")
    })
}

readFile()
writeFile();