const http = require('http');

const server = http.createServer((req, req) => {
	res.end('Hello from NodeJS app behind nginx');
});

server.listen(3000, '0.0.0.0', () => {
	console.log('NodeJS is Running on port 3000');
});
