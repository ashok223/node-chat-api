const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname + '/../public')
const port = process.env.port || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection' , (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
      from: 'John',
      text:'see you then',
      createdAt: 1231
  })
   socket.on('createMessage', (message) => {
       console.log('createMessage', message)
   })

  socket.on('disconnect', () => {
      console.log('user was disconnected');
  })
});

server.listen(port, () => {
    console.log(`server is upon ${port}`);
});

