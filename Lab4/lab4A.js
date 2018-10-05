const http = require('http');
const path = require('path');
const fileSystem = require('fs');

const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  var filePath = path.join(__dirname, 'jdk-8u171-windows-x64.zip');
  var stat = fileSystem.statSync(filePath);

  response.writeHead(200, {
	'Content-Type': 'application/zip',
	'Content-disposition': 'attachment; jdk-8u171-windows-x64.zip',
	'Content-Length': stat.size
  });

  var readStream = fileSystem.createReadStream(filePath);

  readStream.pipe(response);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})