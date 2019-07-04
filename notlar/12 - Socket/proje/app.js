const http = require("http");
const socketio = require("socket.io");
const server = http.createServer((req, res) => {
    res.end("hey");
});



const io = socketio.listen(server);

/*
soket oluşturuk
*/
io.sockets.on("connection", (socket) => {
    console.log("kullanıcı bağlandı");


    setTimeout(() => {
        socket.emit("isim degistir");
        console.log("gönderildi");
    }, 2000);
    

    socket.on("disconnect", () => {
        console.log("kullanıcı ayrıldı");
    });

    socket.on("selamVer", (metin) => {
        console.log(metin);
    })

    //bu şekilde bütün clientlere veri gönderilecektir.
    socket.broadcast.emit("deneme", {data:"mesaj"});
});

//yeni bir namespace oluşturmak
const nsp = io.of("/yeni");

nsp.on("connection", (socket)=> {
    console.log("2. soket açıldı");

    socket.emit("deneme", {data:"berenco"});
});


server.listen(3000);