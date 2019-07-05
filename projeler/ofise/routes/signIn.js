const express = require("express"); // express modülü dahil edildi
const router = express.Router(); // router nesnesi örneklendi


// /signIn get için routing oluşturuldu
router.get("/", (req, res, next) => {
    res.render("signIn.pug");
});

// /signIn get için routing oluşturuldu
router.post("/", (req, res, next) =>{
    console.log("Post isteği atıldı");
    res.send("Post isteği atıldı");
});



// router nesnesinin scope alanı değiştirildi
module.exports = router;