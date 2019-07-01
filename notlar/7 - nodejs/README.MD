# Module Yapısı
scrptA.js dosyası içerisine aşağıdaki kodları yazalım ve bir modül oluşturalım.
```js

//private memers
var age = 30;

//public members
var firstName = "kuday";

var log = function(name){
    console.log(name);
}

module.exports.name = firstname;
module.exports.log = log;

```

Şimdi ise scriptB.js isimli bir dosya oluşturalım.
```js
const scriptA = require("./scriptA.js");

scriptA.log("selam");
```
Ya da değişkenleri public yapmak için scriptA.js dosyasında bu işlemde yapılabilir.
```js

module.exports = {
    firstname,
    log
}

```

# Events Module
```js

const EventEmitter = require("events");

const emitter = new EventEmitter();

//listener kayıt et
emitter.on("connection", function(args){

console.log("baglanti kuruldu", args);
}
);

//eventi tetikle
emitter.emit("connection", {id : 1, name:"beren"});

```