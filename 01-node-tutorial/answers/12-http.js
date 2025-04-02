const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to our home page`);
  } else if (req.url === "/about") {
    res.end("Here is about us");
  } else {
    res.end(`
            <h1>Ooopss!</h1>
            <p>The page is not found</p>
            <a href='/'>back home</a>
        `);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
