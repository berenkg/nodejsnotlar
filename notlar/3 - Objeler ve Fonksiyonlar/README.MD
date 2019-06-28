# CREATING OBJECTS: Constructors

```js
function Person(name, yearOfBirth, job){
    this.namee = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    console.log(this);
}

let yigit = new Person("yigit", 2010, "student");

//Bu yapı aslında constructors ve miras alma yapısıdır.
```

# Prototypes ve Inheritance
```js
function Person(name, yearOfBirth, job){
    this.namee = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    console.log(this);
}

Person.prototype.yasHesapla = function(){
    return 2019 this.yearOfBirth;
}

let yigit = new Person("yigit", 2010, "student");


```
# Object Create 
```js

function Person(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    console.log(this);
}

let teacher = Object.create(Person, {
    teacher.name : {value : "emel"},
    teacher.yearOfBirth : {value: 1997},
    teacher.job = {value: "öğretmen"}
});

```
# Prototype Inheritance
```js

function Person(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    console.log(this);
}

let teacher = function(name, yearOfBirth, job, subject){
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}

teacher.prototype = Object.create(Person.prototype);

teacher.prototype.greeting = function(){
    retrurn "beren";
}

let emel = new teacher("emel", 1989, "teacher", "math")

```

# Callback Fonksiyonlar

```js

topla = function(a,b,c,callback){
    let arr = [];
    for (let i = 0; i <3; i++){
        arr[i] = callback(arguments[i]*2);
    }
    return arr;
}

function ekle(a)
{
    return a + 2;
}

console.log(topla(5,10,15,ekle));

console.log(topla(5,10,15,function(a){
    return a +15;
}));

```
# Immediate Functions
```js
(function(){
    console.log("Benim adım....");
}());

//sadece bir kere çalışmasını istediğimiz fonksiyonlar için kullanılır.

```

# Call, Apply ve Bind
```js

var welcome = function(a,b){
    console.log(`Welcome ${this.name}. Are you interesting in ${a} or ${b}?`);

}

var yigit = {
    name : "Yiğit"
};

welcome.call(yigit,"python", "asp");
welcome.apply(yigit, ["python", "asp"]);
welcomeYigit = welcome.bind(yigit);

welcomeYigit("python", "ada");


```