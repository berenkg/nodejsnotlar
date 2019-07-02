const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended : false})); //body-parser kullanımı için gerekli

/*
Aşağıdaki gibi yönlendirme yapılabilir

app.get("/", fonk = (req,res) => {
    res.send("<h1>Deneme</h1>");
});
*/

/*
Middleware örneği
app.use(fonk = (req, res, next) =>{
    console.log("middleware 1 çalıştırıldı.");
    res.send("<h1>Middleware</h1>");
    next();
});


app.use("/", fonk = (req,res,next) =>{
    res.send("<h1>Filtre</h1>");
});

*/


app.post("/post", fonk = (req, res, next) =>{

    let cevap = req.body;
    console.log(cevap);

    res.redirect("/");

});

app.get("/index", fonk = (req,res,next) =>{

    res.sendFile(__dirname + "/view/index.html");
});

app.use("/", fonk = (req, res, next) =>{

    res.send(`
        <html>
            <body>
                <form action="/post" method="post">
                    <input type="text" name="deneme">
                    <input type="submit" value="Yolla">
                </form>
            </body>
        </html>
    `);

});


//Tasarım yaparken bazı dosyaları (fotoğraf, css) dışarı açmamız gerekmektedir. Bunşar için yeni bir middleware yazılmalıdır.
app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, fonks = () => {
    console.log("3000. portta dinleme başlatıldı.");
})
