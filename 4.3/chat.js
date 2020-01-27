// const server = require('net').createServer();
// let counter = 0;
// let sockets = {};

// function timestamp() {
//   const now = new Date();
//   return `${now.getHours()}:${now.getMinutes()}`;
// }

// server.on('connection', socket => {
//   socket.id = counter++;

//   console.log('Client connected');
//   socket.write('Please type your name: ');

//   socket.on('data', data => {
//     if (!sockets[socket.id]) {
//       socket.name = data.toString().trim();
//       socket.write(`Welcome ${socket.name}!\n`);
//       sockets[socket.id] = socket;
//       return;
//     }
//     Object.entries(sockets).forEach(([key, cs]) => {
//       if (socket.id == key) return;
//       cs.write(`${socket.name} ${timestamp()}: `);
//       cs.write(data);
//     });
//   });

//   socket.on('end', () => {
//     delete sockets[socket.id];
//     console.log('Client disconnected');
//   });
// });

// server.listen(8000, () => console.log('Server bound'));



const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp() {
  const now = new Date(); 
  return `${now.getHours()}:${now.getMinutes()}`
}
 

server.on('connection', socket => {
  socket.id = counter++;

  console.log('Client connected');
  socket.write('Please write your name: ')

  socket.on('data', data => {
    if(!sockets[socket.id]) { // adding a new name if the user conects for the first time
      socket.name = data.toString().trim();// data here is a buffer that is why we do toString here
      socket.write(`Welcome ${socket.name}!\n`)
      sockets[socket.id] = socket;
      return;
    }
    
    
    Object.entries(sockets).forEach(([ key, cs]) => {
      if( socket.id == key) return // how to disable echoing your own message in your own chat 
      cs.write(`${socket.name} ${timestamp()}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
