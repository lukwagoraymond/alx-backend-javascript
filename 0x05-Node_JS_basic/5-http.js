const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((message) => {
          res.end(`${message.join('\n')}`);
        }).catch(() => {
          res.end('Cannot load the database');
        });
      break;
    default:
      res.end();
  }
});
app.listen(port, hostname);
module.exports = app;
