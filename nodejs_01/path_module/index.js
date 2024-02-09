
const path = require('path');
const u = 'http://www.ostad.com/api/v1?user1=shiba,user2=nondo';
console.log(path.basename(u));
console.log(path.parse(u));
console.log(path.dirname(u));
console.log(path.dirname(u));
console.log(path.root)