const fs = require('fs');
const path = require('path');


function WriteAndRead(path,objeto)
{
fs.writeFile(path.resolve('objeto.json'), JSON.stringify(objeto), (err) => 
{
    if (err)
    {
        console.log(err);  
    }
        else
    {  
        console.log("File written succesfully")
    }
    fs.readFile("objeto.json","utf8", (err) => 
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
}

module.exports = {WriteAndRead};
