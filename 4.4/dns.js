// const dns = require('dns'); // name -- addresses

// dns.lookup('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.resolve4('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.resolveMx('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.reverse('35.161.75.227', (err, hostnames) => {
//   console.log(hostnames);
// });

const dns = require('dns');

// dns.lookup('plurasight.com', (err, address) => { // this methos is special because it uses libuv threads
//                                                 // other methods use network directly and not libuv threads
//     console.log(address);                       // just to get an IP address
// })


// dns.resolve4('plurasight.com', (err, address) => { // the same as above but using network directly
//     console.log(address);                       // getting an array of IP addresses
// })


// dns.resolve('plurasight.com','MX', (err, address) => {  // looking inside of web site with arguments in this case "MX"
//     console.log(address);                       
// })
 
// dns.resolveMX('plurasight.com', (err, address) => {  // same as above just move MX (that is just an argument)
//                                                     //  to the namse of the method
//     console.log(address);                       
// })

dns.reverse('54.72.11.253' , (err,hostnames) => {
    console.log(hostnames);
})