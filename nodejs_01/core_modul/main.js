
const http = require('http');
const fs = require('fs');
const port = 8080;
const localhost = '127.0.0.1'
const server = http.createServer((req,res)=>{
    
    // const userData = {
    //     name: 'shibanondo',
    //     class: 'Honours',
    //     roll: 2223282,
    //     address: "Savar,Dhaka",
    //     pAdrres: 'Netrokona'
    // }

    // const jsonData = JSON.stringify(userData);
    // fs.writeFile('json1.json',jsonData,'utf-8',(error)=>{
    //     if(error){
    //        console.log(error)
    //     }else{
    //         console.log('successfully created an json file')
    //     }
    // })
    fs.readFile('json1.json','utf-8',(error,data)=>{
             if(error){
                console.log(error)
             }else{
               
                res.writeHead(200,{'content-type':'application/json'})
                res.write(data)
                res.end();
             }
         })
    


})
server.listen(port,localhost,()=>{
    console.log(`server is running successfully at http://${localhost}:${port}`);
})