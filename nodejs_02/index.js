//http module
const http = require("http");
const fs = require("fs");
const path = require("path");
const localhost = "127.0.0.1";
const PORT = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
 
  let filepath = path.join(__dirname,"public",req.url === "/" ? "index.html" : req.url);

  let contentType = "text/html";
  let ext = path.extname(filepath);
  if (!ext) {
    filepath += ".html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;

    default:
      contentType = "text/html";
  }
  fs.readFile(filepath, (error, content) => {
    if (error) {
      fs.readFile(
        path.join(__dirname, "public", "error.html"),
        (error, data) => {
          if (error) {
            res.writeHead(500);
            res.end("Error!!!");
          } else {
            res.writeHead(404, { "content-type": contentType });
            res.end(data);
          }
        }
      );
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content);
    }
  });
});

app.listen(PORT, localhost, () => {
  console.log(`server is running successfully at = ${localhost}:${PORT}`);
});
