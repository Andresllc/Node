const readline = require('readline');
const fs = require('fs/promises');
const { isAsyncFunction } = require('util/types');
const { read } = require('fs');
const { resolve } = require('path');


let objeto = { name: " ", surname: " ", age: 0 };

function RC(Ask) 
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
        Rl.question(Ask, (respuesta) => 
            {
                resolve(respuesta);
                Rl.close()
            })
    });
    return question
}

function ReadConsole()
{
    const Reading = new Promise((resolve,reject) => 
    {   
        let valor = true;
        if(valor)
        {              
            let result = (RC('What is your name? ')
            .then(name => 
            {
                objeto.name = name;
                return RC('What is your surname? ')
            })
            .then(surname => 
            {
                objeto.surname = surname;
                return RC('What is your age? ')
            })
            .then(age => 
            {
                objeto.age = age;
                let object = JSON.stringify(objeto);
                return fs.writeFile("ObjectR4.json", object)
            })
        
            .then(() => 
            {
                return fs.readFile("ObjectR4.json", "utf8",)
            })
            .then(objeto => 
            {
                console.log(JSON.parse(objeto));
            })
            .catch(err => 
            {
                console.log(err);
            }))
                resolve(result)
        } 
        else 
        {
            let wrong = console.log("Fatal error")
            reject(wrong)
        } 
        return RC
    }) 
}

module.exports = { ReadConsole };