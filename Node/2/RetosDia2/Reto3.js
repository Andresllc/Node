const readline = require('readline');
const fs = require('fs/promises');
const { isAsyncFunction } = require('util/types');
const { read } = require('fs');


let objeto = { name: " ", surname: " ", age: 0 };

function readConsole(pregunta) 
{
    const question = new Promise((resolve, reject) => 
    {
        const Rl = readline.createInterface
        (
            {
                input: process.stdin,
                output: process.stdout
            }
        );
        Rl.question(pregunta, (respuesta) => 
            {
                resolve(respuesta);
                Rl.close()
            }
        )
    });
    return question
}

readConsole('What is your name? ')
.then(name =>  
    {
        objeto.name = name;
        return readConsole('What is your surname? ')
    })
.then(surname => 
    {
        objeto.surname = surname;
        return readConsole('What is your age? ')
    })
.then(age => 
    {
        objeto.age = age;
        let Object = JSON.stringify(objeto);
        return fs.writeFile("objetoR1.json", Object)
    })

.then(() => 
    {
        return fs.readFile("objetoR1.json", "utf8",)
    
    })
.then(objeto => 
    {
        console.log(JSON.parse(objeto));
    })
.catch(err => 
    {
        console.log(err);
    });


async function readConsoleAsy() 
{
    try 
    {
        let name = await readConsole('What is your name? ');
        objeto.name = name;
        let surname = await readConsole('What is your surname? ');
        objeto.surname = surname;
        let age = await readConsole('What is your age? ');
        objeto.age = age;

        let Object =  JSON.stringify(objeto);

        await fs.writeFile("objetoR1.json", Object);
        const writing = await fs.readFile("objetoR1.json", "utf8",);
        console.log(JSON.parse(writing));
    }

    catch (err) 
    {
        console.log("err")
    }
}


readConsoleAsy()

