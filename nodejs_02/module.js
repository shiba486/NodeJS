
//npm module
const color = require('cli-color');
// console.log(color.green("hello node js"));


//local module
    const auth = require('./auth');
    // const {userRegister,userLogin} = require('./auth');

    // auth.userRegister(color.red('shiba'));
    // auth.userLogin(color.green('ariyan'))


                    /*core modules  
                    ______________________*/


/*path module
 _____________*/
const path = require('path');
//dirname
// console.log(__filename)
// console.log("foldername", path.dirname(__filename))

//filename
// console.log("filename:", path.basename(__filename))

//extensionName
// console.log("Ext name:", path.extname(__filename))

//parse
// console.log("parse:", path.parse(__filename));

//Join
// console.log("Join:", path.join(__dirname, "order","app.js"))




/*File System module
 ____________________*/
 const fs = require('fs');
const { buffer } = require('stream/consumers');

 //make a directory
 /*
 fs.mkdir(path.join(__dirname, "/test"),(error)=>{
    if(error){
        console.log(error);
        return
    }
    console.log('Folder created...')
 })
 */

// create file
/*
fs.writeFile(path.join(__dirname, "test","test.txt"),"hello Node",(error)=>{
    if (error) {
        console.log(error);
    }

    console.log('file created')
})


//append file

fs.appendFile(path.join(__dirname,'test','test.txt')," add something newMore data",(error)=>{
    if(error){
        throw error
    }
    console.log('data added')
})
*/


// Read a file
/*
fs.readFile(path.join(__dirname,"test","test.txt"),(error,data)=>{
    if (error) {
        throw error;
    } 
    const  content = Buffer.from(data)
    console.log(content.toString());
})
*/


/* OS module
______________ */
const os = require('os');
// console.log(`os type: ${os.type()}`);
// console.log(`os platform: ${os.platform()}`);
// console.log(` Cpu architecture: ${os.arch()}`);
// console.log(` Cpu details: ${os.cpus()}`);
// console.log(` Free Memory: ${os.freemem()}`);
// console.log(` Total Memory: ${os.totalmem()}`);
// console.log(` Uptime: ${os.uptime()}`);


//Events module
const Emitter = require('events');
// const { log } = require('console');

// const myEmitter = new Emitter();
/*
myEmitter.on("someone",(data)=>{
    console.log(data);
})

myEmitter.emit('someone',{
    name: 'shibanodo',
    class: 'twelve'
})
// console.log(typeof myEmitter);
*/

/*
//Live example
class Auth extends Emitter{
    register(username){
        console.log(`Register Successfully ....`);
        this.emit('registered', username)
    }
}

const Author  = new Auth();
//listen
 //verify email
Author.on('registered',(data)=>{
    console.log(`sending verify email to ${data}`);
})

//welcome email
Author.on('registered',(data)=>{
    console.log(`sending welcome email to ${data}`);
})
Author.register('Shibanondo');
*/




