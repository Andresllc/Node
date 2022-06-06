const fs = require('fs');

let objeto = { name: "Alba", surname: "De la Rosa", age: 21 };
let Object = JSON.stringify(objeto);


fs.writeFile("object.json", Object, (err) => 
{
    if (err)
    {
        console.log(err);  
    }
        else
    {  
        console.log("File written succesfully")
    }
    fs.readFile("object.json","utf8", (err) => 
    {
        if(err) 
        {
            console.log(err);
        }
        else 
        {
            console.log(objeto)
        }
    })
}
)