import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { isObject } from 'util';

ReactDOM.render(<App />, document.getElementById('root'));

// var app = require('express')();
// var http = require('http').createServer(app);
// var io = module.exports.io = require('socket.io')(http);

// const PORT = process.env.PORT || 3000

// const SocketManager = require('./SocketManager')

// app.get('/', function(req, res){
// app.send(__dirname + '../public/index.html');
// });

// io.on('connection', SocketManager)

// http.listen(PORT, function(){
//   console.log('listening on *:3000');
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
