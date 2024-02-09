// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());

// var figlet = require("figlet");
// figlet("Shibanondo Das", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log('middleware is running ')
    next();
  }
app.use(myLogger)
app.get('/',myLogger,(req,res)=>{
    res.send('this home route')
    res.end();
})
app.get('/profile',(req,res)=>{
    res.send('this profile route')
    res.end()
})

app.listen(3000,()=>{
    console.log(`server is running`);
})