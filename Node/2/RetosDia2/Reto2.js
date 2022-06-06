const fs = require('fs/promises');


let objeto = { name: "Alba", surname: "De la Rosa", age: 21 };

let object = JSON.stringify(objeto);


async function AsyncWrite()
    {
        try
            {
                await fs.writeFile("AsincObject.json", object);
                const writing = await fs.readFile("AsincObject.json", "utf8",);
                console.log(JSON.parse(writing));
            }
        catch (err)
            {
                console.log(err);
            }   
    }

AsyncWrite(object);