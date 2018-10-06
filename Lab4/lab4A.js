const http = require('http');
const { fork } = require('child_process');
const qs = require('querystring');

const port = 4000;

const requestHandler = (request, response) => {
  const reader = fork("reader.js");

  reader.send(qs.parse(request.url)["/?url"]);

  reader.on("message", data => {
    response.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})