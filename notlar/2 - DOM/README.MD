# DOM eklentileri üzerinde gezinme
Bir list elemanımızın olduğunu düşünelim...
```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

let val;
let list = document.querySelector('.list-group');
val = list;
val = list.children[2];
val = list.children[2].textContent;


for(let i = 0; i< list.children.length; i++)
{
    console.log(i);
}

</script>
```


# Eleman Oluşturma

```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

const li = document.createElement("li");

li.className="list-group-item";
li.setAttribute("title","new item");
li.setAttribute("data-id","5");
//<li class="list-group-item" title="item" data-id="5"></li>

const text = document.creareTextNode("new item");
li.appendChid(text);

const a = document.createElement("a");
a.setAttrinute("href","#");
li.appendChild(a);

</script>
```

# Eleman Silme / Değiştirme

```html
<ul class="list-group deneme" > 
  <li class="list-group-item">Cras justo odio
  <a href=""#>tıkla</a></li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

const taslist = document.querySelector(".list-group");
taslist.children[0].remove();//siler


taslist.removeChilde(taslist.children[0]);//0. indisin bütün childlerini siler
taslist.children[1].removeAttribute("class");

//Değiştirme

const = degistirilecek = document.querySelector(".list-group");

const h2 = document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("deneme"));

const parent = document.querySelector("deneme");
parent.replaceChild(h2, parent);

 

</script>
```

# Event Listeners Kullanımı

```html
<ul class="list-group deneme" > 
  <li class="list-group-item">Cras justo odio
  <a class="tıkla" href=""#>tıkla</a></li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

const btn = document.querySelector(".tıkla");

    btn.addEventListener("click",tikla);

    function tikla(e){
        console.log(e)
        console.log("tıklandı");
        e.preventDefault(); // sayfanın yenilenmesini engeller

    }

</script>
```

# Evet Bubling Olayı

```html
<ul class="list-group deneme" > 
  <li class="list-group-item2">Cras justo odio
  <a class="tıkla" href=""#>tıkla</a></li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

const btn = document.querySelector(".tıkla");

    const a = document.querySelector("a");
    const li = document.querySelector(".list-group-item2");
    const ul = document.querySelector("ul");

    a.addEventListener("click", function(e){
      console.log("a");
      e.stopPropagation();// içten dışa geçişi engeller.
    });
    a.addEventListener("click", function(e){
      console.log("a");
      e.stopPropagation();
    })
    a.addEventListener("click", function(e){
      console.log("a");
      e.stopPropagation();
    })

    function tikla(e){
        console.log(e)
        console.log("tıklandı");
        e.preventDefault(); // sayfanın yenilenmesini engeller

    }

</script>
```

# Local Storage ve Session Stroge
```html
<ul class="list-group deneme" > 
  <li class="list-group-item2">Cras justo odio
  <a class="tıkla" href=""#>tıkla</a></li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

<script>

console.log(localStorage);

const name = localStorage.setItem("first name","Beren");

console.log(localStorage);
///

const city = sessionStorage.setItem("city","bursa");
console.log("sessionStorage");

//Eleman atamak için yukarıdaki yöntemler kullanılır ve local storage tarayıcıda sürekli kalırken session storage tarayıcı kapandığında silinir.

val1 = localStorage.getItem("first name");

localStroge.removeItem("first name");



</script>
```