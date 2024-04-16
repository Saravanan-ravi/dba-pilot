var express = require('express');
var router = express.Router();
const address = require('address');

// address.dns((err, addrsq) => {
//   console.log(addrsq);
//   // ['10.13.2.1', '10.13.2.6']
// });

// var dns = require('dns');
// var sarDNS = dns.lookup('http://10.185.45.33:4551/osop/',function (err, addresses, family) {
//   console.log(addresses);
// });


router.get("/", async (req, res) => {
  var users;
  address((err, addrs) => {
    addripv4 = addrs.ip;
    addripv6 = addrs.ipv6;
    addrmac = addrs.mac;
    users = addrs;
  });
  res.send(users);
});

// router.get("/", async (req, res) => {
//   var userDNS;
//   address.dns(async (err, addrs1) => {
//     console.log(addrs1);
//     userDNS = addrs1;
//     // ['10.13.2.1', '10.13.2.6']
//   });

//   res.send(userDNS);

// });


module.exports = router;