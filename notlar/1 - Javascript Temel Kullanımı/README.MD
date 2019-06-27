# Giriş
Bu notlar kendi çalışmalarımı destekleyici şekilde hazırlanmıştır. Bundan dolaylı daha çok eksiklik gördüğüm yerlere ağırlık verdim. Temel bilgiler edineceğiniz bir not olarak yaklaşmamanızı öneririm.

# Değişken Tipleri
Genel olarak Primitive (ilkel) ve Reference Types - Objects olmak üzere iki alanda incelenir. Primitive değişkenler arasında string, number, null, bool ve undefined türler bulunurken; Objects içerisinde objeler ve fonksiyonlar bulunur. Diziler de obje olarak değerlendirilir.

# Tür Dönüşümleri
```js
let val;

//number to string
val =  String(10)

//date to string
val = String(new Date());

//array to string
val = String([1,2,3,4])

//ya da toString() kullanılır.
cal = (10).toString();

//string to number
val = Number("10");

//parseInt
//parseFloat

//direkt olarak 10 şeklinde basar
val = parseInt("10.5");

//10.5 şeklinde basar
val = parseFloat("10.5");
```

# Operatörler
```js
let val = 5 == '5'; //true
let val = 5 === '5'; //false çünkü === type kontrolüde yapmaktadır.
```

# Date Objesi
```js


let d = new Date();
console.log(d); 
console.log(d.getDate()); //metotlarla istediğimiz tarih bilgilerini alabiliriz. get metodları
//set metotları ile ise değiştirme işlemleri yapılmaktadır.
```

# Stringler
```js
let val;
val = "Kuday";

//substring
val = val.substring(2,4); //day

//slice
val = "kuday";
val = val.slice(2); //day

//replace
val = "kuday";
val = val.replace("kuday","beren");

//başındaki ve sonundaki boşlukları almak
val = val.trim();

```

# Template Literals
```js

let val;
let isim = "Kuday";
let yas = 22;
val = `Merhaba benim adım ${isim} ve ben 20 yaşından ${(yas > 20)?:"büyüğüm","küçüğüm"}`;

Bu şekilde kolay kullanıma denir.

```
# Diziler
```js

let dizi = [1,2,3];

//ekleme
dizi[dizi.length] = 4; //[1,2,3,4]
dizi.push=5; //[1,2,3,4,5]
dizi.unshift = 0; //[0,1,2,3,4,5]

//silme
dizi.pop(); //[0,1,2,3,4]
dizi.shift(); //[1,2,3,4]

```

# Object Literals

```js
let person = {
	isim : "Kuday",
	soyisim : "GÖRÜN",
	yas : 22,
	dogumYili : function()
	{
		return 2019-this.yas;
	}
}
```
# Dizilerde Döngü Kullanımı

```js
let people = [
				{
					isim : "Beren"
					soyisim : "GÖRÜN",
					yas = 22
				},
				{
					isim : "Kuday"
					soyisim : "GÖRÜN",
					yas = 22
				},
				{
					isim : "BK"
					soyisim : "GÖRÜN",
					yas = 22
				}
			]
people.forEach(function(item)){
	console.log(item.isim);
}
```
# Scope
Fonksiyonlar kendi scopelarını oluştururken, bloklar kendi scopelarını oluşturmazlar
```js
var a = 10;

function deneme()
{
	var a =15;
	console.log("fonksiyon scope" + a); //15
}
console.log(a); // 30

if(a>15)
{
	var a = 30;
	console.log("blok scope" + a); // 30
}

console.log(a); //10
```