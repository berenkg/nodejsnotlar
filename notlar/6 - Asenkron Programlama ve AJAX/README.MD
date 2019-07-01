# Asenkron programlama
```js

const first = () => {
    console.log("first");
    second()
}

const second = () => {
    setTimeout( () =>{
    console.log("second");
    },2000);
    third();
    
}

const third = () => {
    console.log("third");
}

first();


```
# Callback Fonksiyonu
Callback fonksyionları ile asenkron yapıdaki fonksyionları senkron yapya dönüştürebiliriz.

```js

var urunler = [
    {id:1, urun:"top"},
    {id:2, urun:"forma"},
    {id:3, urun:"krampon"}
]

function urunEkle(urun){
    setTimeout(()=>{
        urunler.push(urun);
    },200);
}

function urunGoster(){
    console.log(urunler);
}

urunEkle({id:4, urun:"çorap"});
urunGoster();

```

Yukarıdaki yapıda fonksyionlar asenkron olduğundan dolayı urun Ekleme olayından önce urunGoster fonksyionu çalışacaktır. Bunun önüne callback fonksyionu ile geçilebilmektedir.
```js

var urunler = [
    {id:1, urun:"top"},
    {id:2, urun:"forma"},
    {id:3, urun:"krampon"}
]

function urunEkle(urun, callback){
    setTimeout(()=>{
        urunler.push(urun);
        callback();
    },200);
}

function urunGoster(){
    console.log(urunler);
}

urunEkle({id:4, urun:"çorap"}, urunGoster);

```

# Promise ile Asenkron programlama
```js


var urunler = [
    {id:1, urun:"top"},
    {id:2, urun:"forma"},
    {id:3, urun:"krampon"}
]

function urunEkle(urun){

    return new Promise(function(resolve, reject){

        setTimeout(()=>{
            urunler.push(urun);
            let added = true;
            if(added){
                resolve("eklendi");
            }
            else
            {
                reject("hata");
            }
        });

    });
}

function urunGoster(mesaj){
    console.log(urunler);
    console.log(mesaj);
}

urunEkle({id:4, urun:"çorap"})
.then(urunGoster)
.catch(function(err){
    console.log(err);
});

```
# Fetch kullanımı
```js
function getJson(){

    fetch("data.json")
    .then(response = (data) =>{
    return data.json();
    })
    .then(data = (json) =>{
        console.log((json));
    })
    .catch(error=> {
        console.log("hata");
    });
}
getJson();
```

# Async ve Await

Önceden kodlarımızı bu şekilde than anahtar kelimesi ile yapmayı görmüştük. Aşağıda bunun bir örneği bulunmkatadır.
```js
function getCategory()
{
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("phone");
        },1000);
    });
}

function getProfucts(category){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`5 tane urun  ${category}`);
        });
    })
}

getCategory()
.then(getProfucts);

```

Şimdi async ve await kullanımına bakalım.
```js
function getCategory()
{
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("phone");
        },500);
    });
}

function getProfucts(category){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`5 tane urun  ${category}`);
        },500);
    })
}

//getCategory()
//.then(getProfucts);


async function getProduct(){

    try{
        let category = await getCategory(); // işlem bekleyecek tamamlandıktan sonra aşağıdaki komut çalıştırılacak
        let result = await getProfucts(category);
        console.log(result);
    }catch(error){
        console.log("hata");
    }
  


}

getProduct();
```