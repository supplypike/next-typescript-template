const express = require('express');
const next = require('next');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.static(path.join(__dirname, '/out')));
    server.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '/out/ps-index/'));
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
