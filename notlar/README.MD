# JAVASCRIPT Kısa Tarihçe
90'lı yılların sonunda nescape Sun MS. ile bir dil geliştirir ve bu dile o zamanlar çok popüler olan Java'nın ününden yararlanmak için JAVASCRIPT adını verirler. İlk zamanlar internetin çok yaygın olmamasından dolayı fazla popüler bir dil değildir ve DOM manipulasyonlarında kullanılmaktadır. 2000'li yılların ortalarında yavaş yavaş sunucu istemci etkileşimlerinde kullanılmaya başlanır. 
Tarayıcıların içerisine gömülmüş javascript engine'leri sayesinde javascript kodları çalıştırılmaktadır ancak bir standart yoktur bundan dolayı her Web Browser üreticisi kendi engine'nini tasarlanmaktadır. Bundan dolayı bazen sayfalarda `bu sayfayı google chrome üzerinde çalıştırınız` gibi notlar görülmektedir. Örnek olması açısından V8 open source geliştirilmiş ve geliştirmekte olan Google Chrome üzerinde kullanılan javascript engine'nidir. 

# ECMAScript
Tarayıcıların birbirleriyle farklı şekilde motorlar kullanmasından dolayı ve bazen farklı tarayıcılar için aynı işlemi gören kodları farklı tarayıcılar için tekrardan yazmamızdan dolayı Avrupada ECMAScript isimli bir dernek kurulur ve bu dernek başta javascript olmak üzere diğer diller içinde bazı standartlar yayınlamaya başlar.

# Node.js
Öncelikle şunu söylemekte yarar var Node.js; laravel gibi bir framework değildir. Sunucu tarafında javascript kodlarını çalıştırmamızı sağlayan `non-blocking networking application framework` bir dildir.
Node, Google'ın V8 Javascript engine üzerinde çalışabilen sadece Apache gibi bir web sunucu olmayan, istenirse low-level bir embeded device için donanım ya da Network uygulamaları için kullanabileceğiniz, 100^de 100 asenkron ve non-blocking bir yapıda tasarlanmış ve sadece tek thread üzerinde çalışan bir yapıdır.

Node içerisinde http, socket vb. modüller C++ ile yazılmıştır ve içerisinde aslında çokça C++ kullanılmaktadır. Node çalışmaya başladığı anda arkada bir takım C++ kodları derler ancak bir output oluşturmaz. Aslında C/C++ ile node içinde kullanaileceğimiz bindigler yazılır ve javascript ile bunlar etkileşir. Javascript yorumlanan bir diye tanımlansada, aslında javascript diğer yorumlanan dillerle arasında ciddi bir fark vardır. Line by line çalışan dillerden farklı olarak, çalışmadan önce bir kısmı compile olan sonra line by line çalışsan bir dildir. Derlenme sonucunda kod output olarak çıkmazken hafızaya yüklenmektedir.

# NODE.JS Yapısı
1. Node Standard Libary (JavaScript)
2. Node Bindings C/C++
3. V8
4. Libuv
5. ....
6. ....
7. ....
8. Kernel

Yukarıdaki kısımda `....` olarak tanımladığım yerleri ileride anlatacağım.

Aslında ilk 2 katmanı yukarıda açıkladık. 3. katman olan V8 ise Google Chrome tarafıdna kullanılan javascript engine'dir. Kısacası sunucu tarafında yazmış olduğumuz javascript kodlarını çalıştırmamızı sağlayan motordur.

## Libuv
Libuv, asynchronous I/O işlemlerinden sorumlu kısım, node.js için özel olarak geliştirilsede, gittikçe populerleşen bir kütüphane. Operating System Level / İşletim sistemi seviyesinde Non-Blocking I/O işlemlerine olanak sağlamakta. 

### Node.js ve Non-blocking
İlk olarak, gelen istekler, bir thread havuzunda değil, Event loop mimarisinde / yapısında karşılanıyor.
Gelen tüm istekler, anında bir callback referansına dönüştürülmekte (Libuv ve C/C++ la yazılan standart kütüphaneleri hatırlayın, burda her bir call-backimiz için bir C++ pointeri hafızıya kaydediliyor) ve bu istekler POSIX ASYNC havuzuna delegate ediliyor.(İşletim sistemi seviyesinde, NT mimarisine benzer bir yapıda ASYNC bir thread pool) sonra eğer gerek varsa DB ve Dosya işlemleri yine Non-blocking olarak yapılıyor sonrasında referansı saklanan (C++ pointerimiz) “call backimiz” çalışiyor işlem gerçekleşiyor ve istemciye cevap iletiliyor.
Görüldüğü gibi , Hem request / isteklerin karşılanmasında(Event-loop sayesinde, single thread ile) hem de işletim sistemi seviyesinde ki islemleri (Libuv sayesinde, multi-threaded olarak)  yine non-blocking olarak handle edebilmemize olanak sağlanıyor. (Not :  LibUv in yönettiği POSIX threads havuzu, multi-thread bir yapı, Node.js in Posix e kadar olan kısmı single -threaded )
Node.js in CPU intesive / Yüksek işlem gücü gerektiren durumlarda ki zaafiyeti; C/C++ yada Rust gibi çok hızlı dillerle yazılan bindigler ile giderilebilmektedir.

# Platform Olarak Bilmemiz Gerekenler
## Single-Thread – Birim zaman da tek bir  iş
Thread kavramı, özellikle .NET yada Java ile çalışan yazılımcılar için tanıdıkdır. bu iki platformda, concurrency/eş zamanlılık için multi-thread mimarisini kullanır. Fakat thread kavramı özellike thread sayısı artıkça yönetilmesi zor bir hale gelmekte ve ayrıca kullanabileceğimiz azami thread sayısının da bir sınırı olmakta. Node.js ise .NET yada Java gibi concurency/eş zamanlılık sorunu nu “multi thread” yapıyla değil, “single thread”  +event loop +lib/uv  3 lüsü ile çözmeye çalışmakta.
Yani, Node.js her zaman için tek bir thread(bu da main thread dediğimiz ve direkt olarak işlemcimizdeki lead-core olarak adlandırdığımız ana işlem birimini) kullanacaktır.  Bu ilk bakışta performans olarak dez avantaj gibi gözüksede, node.js in üzerine inşa edildiği event loop mimarisi, asenkron yapı ve lib/uv alt yapısı ile ciddi bir performans kazanımına dönüşmektedir. 
Node.js Event loop mimarisi ve Libuv alt yapısını, biz geliştiriciler için yönetmekte ve arka planda ciddi bir abstraction/soyutlama sağlamakta. Yani bu kavramları derinlemesine bilmek yada aktif olarak çalışma mantıklarına müdehale etmek gibi bir zorunluluğumuz yok.
Bir geliştirici olarak bizim için önemli olan kısım ise, hem javascript için hemde node.js için asenkron yapıyı iyi anlayıp düzgün bir şekilde kullanmak ve uygulama geliştirirken, Node.js in bu yapısını aklımızda bulundurup, asenkron yapıya bağlı kalmaya azami özen göstermek diyebiliriz. Sonuç olarak Node.js single thread bir yapı ve asenkron yapıya sadık kalmak performans için önemli.

## Event-Loop
Bir web isteği , direkt olarak node.js tarafından değil üst katmanı olan Event-loop katmanı tarafında karşılanıp sıraya konulmakta, böylece multi thread yapıyla kıyaslanamayacak kadar daha fazla request/istek karşılanabilmektedir. Event-loop içinde sıraya konan her bir istek bir referans numarasıyla(teknik olarak bir c/c++ pointer) eşleştirilip, thread boşaldığında sırada bekleyen diğer işlemi event-loop dan  alınıp thread e aktarılmış olur.
Kısaca: Event-Loop sayesinde, yapılacak işlemler  yada karışılanacak web istekleri bir havuzda toplanıp, sırası gelen işlemin tamamlanması ve olabildiğince fazla isteği karşılayabilme imkanı sunulmaktadır. Blogdaki bu konuyla ilgili daha teknik olan yazıya bakabilirsiniz.

## Asenkron programlama ve call-back ler
İster web örneğinde olsun, ister windows form örneğinde, eğer senkron bir yapımız varsa, kullanıcı bu işlem bitene kadar başka bir şey yapamaycaktır. Örneğin web sayfasındaki butona tıkladğında, işlem bitmeden başka bir şey yapma imkanı olmayacaktır. Aynı şekilde windows örneğinde de, sıralama işlemi bitmeden başka bir işlem yapılamayacaktır.
Her iki örnektede kullanıcın kullandığı ekranlar en basit haliyle işlemler bitene kadar donacaktır. İşte bu tür sorunları aşmak için 2 alternatifimiz var, biri multi-thread kullanımı(böylece, örneğin sıralama işlemimiz için bir thread ayırıp, kullanıcının ana thread ile başka işlemler yapmasına izin vermek gibi) diğeri ise Asenkron yapıyı kullanmak.
Node.js yukarıda bahsettiğimiz gibi, “single thread” kullanabildiği için, birden fazla thread kullanma imkanı yok ama  senkron yapinin uygulamamiza getireceği “bloklanma” sorunu aşabilmek için asenkron yapıyı kullanmakta. Asenkron yapı node.js için de Event-Loop, Event-Queue ve Call-Back ler aracılığıyla yönetilmekte. Bu 3 kavram karışık ve ya kompleks gibi gelebilir ama uygulamamız içinde yapmamız gerekn tek şey call-back leri kullanmak tan ibaret diyebiliriz.
Öncelikle, kısa bir hatırlatma yaparak devam edelim; Node.js içinde hemen hemen herşey asenkron yapıya uygun tasarlanmıştır. Hemen hemen herşeyden kastım, node.js in bize sunduğu “API / Uygulama geliştirme alt yapısı” asenkron fonksiyonlarla donatılmıştır. Ama bazi fonksiyonlarin senkron versiyonlarida mevcuttur.

### Asenkron Yapı
En basit hali ile(yada pratik deki karşılığı ile), eğer bir fonksiyona, son parametre olarak “başka bir fonksiyonu” call-back olarak geçiyorsak o fonksiyon a asenkron fonksiyon demekteyiz. Eğer daha önce hiç Javascript kullanmadıysanız “Javascript, fonksiyonlarımıza parametre olarak başka bir fonksiyonu” geçmemize imkan vermekte.

#### Callback nedir?
Call-back  dediğimiz fonksiyonların, yapı olarak diğer fonksiyonlardan hiç bir farkı yoktur. Call-Back diye adlandırmamızın nedenini aşağıdaki örnekle anlamaya çalışalım. Yukarıdaki SSL örneğini asenkron olarak yazacak olursak;
```js

const fs = require('fs')
fs.readFile('public.cert', function (err, sertifika) {
    if (err) { // hata kontrolu
        return console.log(err)
    }
    console.log("Sertifika Yuklendi...")
})

```
```js
readFile(”dosya_yolu’,call_back); // Asenkron şekli
readFileSync(“dosya_yolu”); // Senkron şekli
```
Node.js araka planda, event-loop ve LibUv mimarisini kullanarak işlemi non-blocking/ bloksuz bir şekilde yerine getirmektedir.
Pratik deki iş akışı açısından ise olup biten şey gayet basit;
1. Node.js e bir dosyayı okumasını söylüyoruz,
2. dosyayı diskten okuma sürecini beklemek yerine,
3. dosyayı okuduğun zaman yapılması gereken işleri  taşıyan fonksiyonu call-back olarak sağlıyoruz
4. işlem bittiğinde node.js e, “sana parametre olarak verdiğim fonksiyonu geri çağır va çalıştır diyoruz ” “call-back“

Önemli bir başka mesele ise, call-back fonksiyonuna geçtiğimiz iki parametre;
Node.js içinde standart olarak bütün call-back fonksiyonlarına, ilk parametre olarak bir hata varmı yok mu anlayabilmek adına bir “Error” nesnesi sağlanmakta. Bu standart tüm node.js ekosistemi için geçerli diyebiliriz. Bu yüzden aşağıdaki kontrolü yaptık,

```js
 if (err) { // hata kontrolu
        return console.log(err)
    }
```
Bizim örneğimiz de bir dosyayı okumaya çalıştığımız için “ssl sertifikamız” geri dönecek. Örneğin, bir veri tabanından kayıtları sorgulaycak olsaydık, bu değer veri tabanından gelecel kayıtları taşıyacaktı. Bu parametrelerin sıralaı önemli, ilk parametre her zaman hata kontrolü, ikincisi ise gerçek veriyi taşıaycaktır.
Bu arada, node.js in sağladığı fonksiyonların dışında kendi fonksiyonlarımızı da “asenkron” bir şekilde yazabilnekteyiz. Örneğin aşağıda bir veri tabanına bağlanmak için kullandığımızı bir fonksiyonumuz  olsun;
```js
function veritabaniniSorgula(baglantiYolu, callback) {
    var db = veriTabaninaBaglan(baglantiYolu);
    var veriler = db.sorgulamayiYap();
    callback(veriler)
}

veritabaniniSorgula("baglantiYolu", function (err,veriler) {
    console.log("Veriler : ",veriler)
})
```

## The Module Pattern  / Node.js modül kavramı
Javascript in dil ile ilgili en önemli eksiklerin başinda, namespacing / isim alanlarinin eksikliği yada , yazdığımız kod  ların, eğer dikkat etmezsek, tamamının global scope da çalışma riskinin olması geliyor diyebiliriz. Burada bu konuyu detaylandirmadan, Node.js in bu konuyu nasil yönettiğine bakalim.
Yukarida kısaca bahsettigimiz, namespace ve global scope problemini aşmak icin CommonJS isimli bir grup yada vakif, bir standart calışmasına giderek, ” CommonJS module pattern”  isimli bir standartlaştirma örneği yayınlar ve bu standart , javascript dünyasında ciddi anlamda kabul görür.
Node.js de , işte bu CommenJs Modules standart larıni temel alan modül / namespace yapısi ile, bize kodlarimizi, daha modüler bir yapıda yazmak, ve kodlarimizin hangi kısmini , uygulamamizin diger kısimlarina açagimizi organize etme imkanı verir.
Bu yapı oldukça basittir, simdi asağida, bir veri tabani bağlantısi yağtığımızı düşünün,
```js
var mysql = require('mysql')
 var paşword ='123456';
 var user='admin'
 var baglanti = mysql.connect('localhost',user,paşword,'urunlerDB')
 exports.baglan = function(){
 baglanti.open()
 }
 exports.baglantiKapat = function(){
 baglanti.close()
 }
 exports.veriGetir = function(tabloIsmi){
 var veri = mysql.query('select * from '+tabloIsmi)
 return veri;
 }
 ```
 Oncelikle, Node.js yazdiginiz her bir .js dosyasini bir nevi  bir module olarak kabul ediyor diyebilirz.  yukarıdaki veritabani.js içinde, exports.xx seklinde(exports.baglan() gibi) dısari acilmayan hersey private dir. exports.baglan() seklinde, tanimladigimiz hersey, (fonkisyonlar, nesneler, degiskenler) ise diger modüllerden(her bir .js dosyasi bir module olarak kabul ediliyor diye tekrar edelim) çagrilabilir, degistirilebilir vs.  Örnegin  dosyanin en başındaki require(‘mysql’) seklindeki tanimlama ile, mysql tarafindan yazildigini var saydigimiz, veritabani sürücüsünü bu dosyaya dahil etmis olduk.
mysql.connect(), methodunun, mysql.js isimli modülde, exports.connect()  seklinde ihraç edildigini düsünebiliriz.
Node.js , her bir .js uzantili dosyayi bir modül olarak kabul eder  dedik,  Her bir .js uzantıli dosyamiz, node.js tarafindan çalıştırılmadan önce,  bazi ekstra eklemelere maruz kalır, node.js her bir dosyanın içindeki kodu bir IIFE (Immediately Invoked Function Expreşion – kendi kendini çagıran bir fonksiyon) ile sarmalar, ve bir module.exports nesnesini geri döndürür. Gerçekte, bir namespace olmasada, javascript e has bazi yeteneklerle, bir namespace etkisi oluşturur. (tarayicilarda bu durum farklıdir, browser bir javascript dosyasıni nasıl bulduysa o şekilde işleme koyar. her hangi bir değişiklik yapmaz.)

## NPM  / Node.js paket – modül yöneticisi ve Package.json 
Node.js içinde kullanacağimiz, başkalari tarafindan yazılan, paketleri / modülleri uygulamamıza kolayca dahil etmemize yarayan, yada kendi yazdığımız modülleri, paketleyip paylaşmak icin kullanabilecegimiz bir paket yoneticisi npm. PHP icin composer, .NET dünyasindaki nuget  ile kıyaslayabiliriz.
npm in ayrıca bir otomasyon aracı olarak da kullanıldığını da belirtelim. Yapacağımız bazı işlemler için bir Task Runner olarak da kullanabilmekteyiz.
packages.json dosyası ise uygulamamızın genel ahvalini içinde tutan bir özet dosyası diyebiliriz. Ayrıca, uygulamamızınz içinde kullanacağımız node.js modüllerinin de bir listesini tutup uygulamamızın bağımlılıklarını da yönetme imkanı vermekte.