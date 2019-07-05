const express = require("express"); // express modülü dahil edildi
const router = express.Router(); // router nesnesi örneklendi

let user = false; // kullanıcı bilgisi alındı

/*
Eğer kullanıcı sisteme girmediyse kök dizine yönelndirilerek giriş işlemi yapması istenecektir.
Eğer kullanıcı sisteme girdiyse işlemler devam edecektir.
*/
router.use((req, res, next) => {
    if(user){
        console.log("giriş yapılmış");
        next();
    }
    else{
        console.log("giriş yok");
        res.redirect("/");
    }
});

router.get("/", (req,res,next) => {
    res.render("dashboard/index.pug", {
        baslik:"Admin Dashboard2",
        aciklama:"Welcome Jhon Deo , Love to see you back."
    });
})

// router nesnesinin scope alanı değiştirildi
module.exports = router;