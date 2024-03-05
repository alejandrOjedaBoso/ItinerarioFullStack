const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    blockingCode();
    res.end("About page");
  } else {
    res.end("Error 404");
  }
});

server.listen(5000, () => {
  console.log("Server is Listenning on port: 5000...");
});

function blockingCode() {
  // Blocking code!!!
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      console.log(i + " " + j);
    }
  }
}
