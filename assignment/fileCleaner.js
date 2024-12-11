const fs = require('fs');

function cleanFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log("error reading file: " + err)
        }
        //remove extra space
        const cleanData = data.replace(/\s+/g, ' ').trim();

        //cleaned content back to the file
        fs.writeFile(filename, cleanData, 'utf8', (writeErr) => {
            if (writeErr) {
                console.log("Error while writing: " + writeErr);
            }
            else {
                console.log("File cleaned and updated successfully")
            }
        })
    })
}

cleanFile('example.txt')
