const os = require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.totalmem() / 1024/1024/1024);
console.log(os.freemem() / 1024/1024/1024);
console.log(os.hostname());
console.log(os.release());
console.log(os.type());
// console.log(os.constants);
// console.log(os.cpus());
// console.log(os.tmpdir());
