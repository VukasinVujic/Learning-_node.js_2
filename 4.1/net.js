// const server = require('net').createServer();

// server.on('connection', socket => {
//   console.log('Client connected');
//   socket.write('Welcome new client!\n');

//   socket.on('data', data => {
//     console.log('data is:', data);
//     socket.write('data is: ');
//     socket.write(data);
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(8000, () => console.log('Server bound'));


process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', (socket) => {
  socket.id = counter++;
  sockets[socket.id] = socket; // how to index an object  
  console.log("Client connection");
  socket.write('welcome new client\n');

  socket.on('data', (data) => {
      Object.entries(sockets) // loop through an object with key and value 
      .forEach(([key, cs])=>{
        cs.write(`${socket.id}: `)
        cs.write(data);

      })   })
  // socket.setEncoding('UTF8'); // to make server transfer numbers from buffer into letters
  
  socket.on('end' , () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  })

});


server.listen(8000, () => {
  console.log('SErver bound');
})