const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server,{
    cors: {origin: '*'}
});

io.on('connection', (socket) => {
    console.log("se conoceto un cliente")

    socket.broadcast.emit("chat_mensaje", {
        usuario: "info",
        texto: "se a concectado un nuevo usuario"
    })

    socket.on("chat_mensaje", (data) =>{
        io.emit("chat_mensaje", data)
    })
})

server.listen(3000);