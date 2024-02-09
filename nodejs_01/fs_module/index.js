const { error } = require('console');
const fs = require('fs');

// _________________________________ Asynchronous  ___________________________________

//write file
// fs.writeFile('hello.txt','this is demo text',(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('create file successfully');
//     }
// })
//append file
// fs.appendFile('hello.txt','. this is demo text2',(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('append successfully');
//     }
// })

//rename file
// fs.rename('hello.txt','demo.txt',(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('rename file successfully');
//     }
// })

//read file
// fs.readFile('demo.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })

//is available file or not
// fs.exists('hello.txt',(error)=>{
//     if(error){
//         console.log('not found');
//     }else{
//         console.log('found file');
//     }
// })

//delete file
// fs.unlink('demo.txt',(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('file delete successfully');
//     }
// })
// _________________________________ synchronous  ___________________________________ 
//write file
// const data = fs.writeFileSync('demo.txt','this is demo text');
// const data = fs.appendFileSync('demo.txt','. this is demo text2');
// const data = fs.renameSync('demo.txt','main.html');
// const data = fs.readFileSync('index.txt','utf-8');
// console.log(data);
// const data = fs.unlinkSync('main.html','utf-8')


