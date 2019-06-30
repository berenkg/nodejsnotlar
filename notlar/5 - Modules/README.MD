# Private ve Public Değişkenler
her modülün kendine ait bir scope alanı vardır ve normal şartlar altında dışarıdan ulaşılamaz. Ulaşılmasını sağlamak için return anahtar kelimesine ihtiyaç vardır.

```js

var Module = (function(){

//private
    var sayi = 0;

    let sayiDondur = function(){
            return sayi;
        }

    return {
        //public
        sayiDondur
    }
    
}());

console.log(Module.sayiDondur());
console.log(Module.sayi);

```
