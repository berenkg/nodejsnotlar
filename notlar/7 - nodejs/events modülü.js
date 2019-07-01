const EventEmitter = require("events");

const emitter = new EventEmitter();

//listener kayıt et
emitter.on("connection", function(args){

console.log("baglanti kuruldu", args);
}
);

//eventi tetikle
emitter.emit("connection", {id : 1, name:"beren"});