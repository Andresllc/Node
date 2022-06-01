let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole")

// writeAndReadObject.writeAndRead(objeto);
readConsole.readConsole(function(objeto){
    writeAndReadObject.writeAndRead("objeto.json",objeto)
});