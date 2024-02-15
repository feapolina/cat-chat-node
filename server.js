const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

app.use(express.static("public"));

io.addListener("connection", (socket) => {
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});

servidorHTTP.listen(4040, "192.168.1.109");
