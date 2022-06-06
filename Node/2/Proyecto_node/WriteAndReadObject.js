const fs = require('fs/promises');




function WriteAndRead(path, objeto) {
    const writingAndReading = new Promise((resolve, reject) => 
    {
        let boo = true;
        if (boo) 
        {
            let stringObjeto = JSON.stringify(objeto);
            let result = fs.writeFile(path, stringObjeto)
                .then(() => 
                {
                    return fs.readFile(path, "utf8",)
                })
                .then(objeto =>     
                {
                    console.log(JSON.parse(objeto));
                })
                .catch(err => 
                {
                    console.log(err);
                });
            resolve(result)
        }else
        {
            let wrong = console.log("Fatal error")
            reject(wrong)
        } 
        return writingAndReading
    }
    )}
    

        module.exports = { WriteAndRead };