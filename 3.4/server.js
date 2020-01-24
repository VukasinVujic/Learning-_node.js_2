// const EventEmitter = require('events');

// class Server extends EventEmitter {
//   constructor(client) {
//     super();
//     this.tasks = {};
//     this.taskId = 1;
//     process.nextTick(() => {
//       this.emit(
//         'response',
//         'Type a command (help to list commands)'
//       );
//     });
//     client.on('command', (command, args) => {
//       switch (command) {
//       case 'help':
//       case 'add':
//       case 'ls':
//       case 'delete':
//         this[command](args);
//         break;
//       default:
//         this.emit('response', 'Unknown command...');
//       }
//     });
//   }

//   tasksString() {
//     return Object.keys(this.tasks).map(key => {
//       return `${key}: ${this.tasks[key]}`;
//     }).join('\n');
//   }

//   help() {
//     this.emit('response', `Available Commands:
//   add task
//   ls
//   delete :id`
//     );
//   }
//   add(args) {
//     this.tasks[this.taskId] = args.join(' ');
//     this.emit('response', `Added task ${this.taskId}`);
//     this.taskId++;
//   }
//   ls() {
//     this.emit('response', `Tasks:\n${this.tasksString()}`);
//   }
//   delete(args) {
//     delete(this.tasks[args[0]]);
//     this.emit('response', `Deleted task ${args[0]}`);
//   }
// }

// module.exports = (client) => new Server(client);


const EventEmitter = require('events');

class Server extends EventEmitter {
   constructor(client) {
     super();
     this.tasks = {}; // to hold task information
     this.taskId = 1; // to have an id 
     process.nextTick(() => { // so the response event  would run before everyting
       this.emit('response' ,'Type comand (help to list commands');
     })
     client.on('command' , (command, args) => {
      //  console.log(`Comand: ${command}`);
      //  help, add , ls , delete
      switch(command){
        case 'help':
        case 'add':
        case 'ls':
        case 'delete':
          this[command](args); // to choose on of the commands above, args is what user types
        break;
        default:  
        this.emit('response', 'Unknown command...');
        
      }
     })
   }
   tasksString(){
     return Object.keys(this.tasks).map(key => {
        return `${key}: ${this.tasks[key]}`;
     }).join('\n');
   }

   help(){
     this.emit('response', `Availabe commands are:
      add task
      ls
      delete: id`);
   }
   add(args){
    this.tasks[this.taskId] = args.join(' ');
    this.emit('response', `Added task ${this.taskId}`);
    this.taskId++;
  }
  ls(){
    this.emit('response', `Tasks:\n${this.tasksString()}`) 
  }
  delete(args){
    delete(this.tasks[args[0]]);
    this.emit('response', `Deleted task ${args[0]}`)
  }
    
}

module.exports =(client) => new Server(client);