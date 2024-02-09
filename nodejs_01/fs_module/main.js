const http = require("http");
const url = require("url");
const PORT = 8080;
const localhost = "127.0.0.1";
const server = http.createServer((req, res) => {
  let localURL = "https://www.facebook.com/photo/?fbid=826445589285774&set=pb.100057610202982.-2207520000";
  objCreate = url.parse(localURL, true);
  const { host: hostName, path: pathName, search: SearchQuery } = objCreate;

  function handleFilePath(location, statusCode) {
    res.writeHead(statusCode, { "content-type": "text/html" });
    res.write(`<h1>${location}</h1>`);
    res.end();
  }
  if (req.url == "/") {
    handleFilePath(hostName, 200);
  } else if (req.url == "/path") {
    handleFilePath(pathName, 200);
  } else if (req.url == "/search") {
    handleFilePath(SearchQuery, 200);
  } else {
    handleFilePath("404: Error", 200);
  }
});
server.listen(PORT, localhost, () => {
  console.log(
    `server is running successfully at = http://${localhost}:${PORT}`
  );
});
