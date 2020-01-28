// const dgram = require('dgram');
// const PORT = 3333;
// const HOST = '127.0.0.1';

// // Server
// const server = dgram.createSocket('udp4');

// server.on('listening', () => console.log('UDP Server listening'));

// server.on('message', (msg, rinfo) => {
//   console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
// });

// server.bind(PORT, HOST);

// // Client

// const client = dgram.createSocket('udp4');
// const msg = Buffer.from('Pluralsight rocks');

// client.send(msg, 0, msg.length, PORT, HOST, (err) => {
//   if (err) throw err;

//   console.log('UDP message sent');
//   client.close();
// });

const dgram = require('dgram'); // implementation of UDP Datagram sockets.
const PORT = 3333;
const HOST = '127.0.0.1';

// Server

const server = dgram.createSocket('udp4'); // also even emitter, and a socket

server.on('listening', ()=>{ // trigers when udp server starts listing 
  console.log('UDP Server listing ');
})

server.on('message', (msg, rinfo) => { //every time a socket gets a message this event is trigger
  console.log(`${rinfo.address}: ${rinfo.port} - ${msg}`);
})
server.bind(PORT, HOST); // adding additional key/values to server socket

// Client

  const client = dgram.createSocket('udp4'); // socket and emitter 
  const msg = Buffer.from('Pluralsight rocks');
  
  // this method could send a msg (on first place, argument)as a string or a as Buffer
  // "0" and "msg.length" only you when you are using a buffer(they are index inside buffer)
  client.send(msg, 0 , msg.length, PORT , HOST, (err) => { // this method send UDP paket on PORT and HOST  
                                                      // you put, this way is connected with 
                                                      // server socket who is up  
    if(err) throw err; 
  
      console.log('UDP message send');
  
      client.close(); // closing, just in case if this is the only UDP paket koji hocemo da posaljemo
   });