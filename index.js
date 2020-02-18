const server = require('./server');

const port = 4003;



server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });

  module.exports = server;