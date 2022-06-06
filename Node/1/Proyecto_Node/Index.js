let WriteAndReadObject = require("./WriteAndReadObject")
let ReadConsole = require("./ReadConsole")

// writeAndReadObject.writeAndRead(objeto);
ReadConsole.ReadConsole(function(objeto){
    WriteAndReadObject.WriteAndRead("objeto.json",objeto)
});