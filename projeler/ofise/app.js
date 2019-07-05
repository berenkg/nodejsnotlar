const express = require("express"); // express paketini dahil ediyoruz
const PORT = 3000; // sunucumuzu 3000 nolu port u dinleyecek
const app = new express(); // express i kullanarak bir sunucu referansi olusturyoruz

app.set("view engine","pug"); // varsayılan engine pug oldugunu belirttik


//ilk end-point/rotamiz localhost:3000 e yapilacak tum get requestlerini dinleyecek
app.get("/", (req, res) => {
 res.render("index.pug", {name:"beren", surname:"gorun"});
})

/*
bu satir sunucumuzu baslatacak ve her sey yolunda gittiyse
konsoldan bizi bilgilendirecek.
*/
app.listen(PORT, () => { console.log(`Sunucumuz ${PORT} nolu port uzerinde calismakta.`) });

