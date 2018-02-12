const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const path = require('path');
const http = require('http');

var socketIo = require('socket.io');
var io = socketIo();
var editorSocketService = require('./services/editorSocketService')(io);

//connect to mongoDB database;
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds225038.mlab.com:25038/fullstackproject');

app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, '../public')));

const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
    console.log("Server is listening on port 3000.");
}

app.use((req, res) => {
    res.sendFile('index.html', {root : path.join(__dirname, '../public')});
})
