const http = require("http");
const fs = require("fs");
const port = 3000;
const localhost = "127.0.0.1";
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    fs.readFile("./view/index.html",'utf-8', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.writeHead(200, { "content-type" : "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./view/about.html",'utf-8',(error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/service") {
    fs.readFile("./view/service.html", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile("./view/contact.html", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else {
    fs.readFile("./view/404.html", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});
server.listen(port, localhost, () => {
  console.log(`server is running successfully at http://${localhost}:${port}`);
});
