// Create web server
// Create a web server that listens on port 3000
// When you visit the root of the server in your browser, it should display the text "Welcome to the main page"
// When you visit the /comments URL, it should display the text "Welcome to the comments page"
// When you visit the /comments/new URL, it should display the text "Welcome to the new comments page"

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to the main page');
    res.end();
  } else if (req.url === '/comments') {
    res.write('Welcome to the comments page');
    res.end();
  } else if (req.url === '/comments/new') {
    res.write('Welcome to the new comments page');
    res.end();
  }
});

server.listen(3000);