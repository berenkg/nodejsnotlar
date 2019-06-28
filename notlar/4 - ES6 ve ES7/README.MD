# Arrow Functions

```js

//ES5
let welcomeES5 = function(){
    console.log("Hello from ES5");
}

welcomeES5();

//ES6
let welcomeES6 = () => {
    console.log("Hello from ES6);
}
welcomeES6();

let deneme = isim => isim.split(" ");

console.log(deneme("Beren Kuday"));

```
# this

```js

//ES5
let list = {
    category : "phone",
    names : ["vestel","Samsung","iPhone"],
    read : function(){
        var self = this;
        this.names.map(function(name){
            console.log(`Category ${self.category} and ${name}`);
        });
    }
};

list.read();

//ES6
let list2 = {
    category : "phone",
    names : ["vestel","Samsung","iPhone"],
    read : function(){
        this.names.map((name) => {
            console.log(`Category ${this.category} and ${name}`);
        });
    }
};
list2.read();

```
# Spread Operatörler
```js
function getTotal(a,b,c){
    let toplam = 0;
    for(let i =0; i<arguments.length; i++)
    {
        console.log(i);
        toplam +=  arguments[i];
    }
    return toplam;
}
let dizi = [10,20,30];
let dizi2 = [40,50,60];
//ES5
console.log(getTotal.apply(null,dizi)); // foksitona direkt olarak dizi gönderemediğimiz için apply ile gönderdik. apply ilk olarak bir nesne istemektedir, nesnemiz olmadığı için o kısmı null olarak bıraktık.

//ES6

dizi.push(...dizi2);
console.log(dizi)
console.log("--");
console.log(getTotal(...dizi));

```

# Rest Parameters
```js

function rest(...arr){
    let result =0;
    arr.foreach(item=>result += item );
    return result;
}

rest(10,20,30,40);//100

```

# Destructuring
```js

const [ip, port, timeout] = ["192.168.1.1", "80", "700"];
console.log(ip, port, timeout);

```

# Array

```js

const products = [
    {name:"Samsung S6", price:"1000"},
    {name:"Samsung S7", price:"1200"},
    {name:"Samsung S8", price:"1500"}
]

console.log(Array.from(products,prd => prd.name=="Samsung S7"));

for(let i of products){
    console.log(i.name);
}

```
# Class
```js

//ES5
var PersonES5 = function(name, job){
    this.name = name;
    this.job = job;

}
PersonES5.prototype.print = function(){
    return  (this.job);
}

var yigit = new PersonES5("yigit","Student");

console.log(yigit.print());

//ES6

class PersonES6{
    constructor(name,job){
        this.name = name;
        this.job = job;
    }

    print(){
        return this.job;
    }
}

let emel = new PersonES6("emel","engineer");
console.log(emel.print());


```