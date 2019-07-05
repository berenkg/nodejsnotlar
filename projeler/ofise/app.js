const express = require("express"); // express paketini dahil ediyoruz
const PORT = 3000; // sunucumuzu 3000 nolu port u dinleyecek
const app = new express(); // express i kullanarak bir sunucu referansi olusturyoruz

/*middleware işlemleri için*/
const admin = require("./middleware/admin.js");
/*middleware işlemleri için*/
/*routing işlemleri için*/
const signIn = require("./routes/signIn.js");
/*routing işlemleri için*/

app.set("view engine","pug"); // varsayılan engine pug oldugunu belirttik
app.use(express.static("public")); /* public klasörü altındaki bütün dosyaları statik olarak belirledik.
Bu şekilde dosyalara heryerden ulaşılabilecek.*/

//ilk end-point/rotamiz localhost:3000 e yapilacak tum get requestlerini dinleyecek

app.use("/", signIn );

app.use("/admin/", admin);


/*
bu satir sunucumuzu baslatacak ve her sey yolunda gittiyse
konsoldan bizi bilgilendirecek.
*/
app.listen(PORT, () => { console.log(`Sunucumuz ${PORT} nolu port uzerinde calismakta.`) });

