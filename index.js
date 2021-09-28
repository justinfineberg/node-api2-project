// require your server and launch it here
const server = require('./api/server')

server.listen(8000, () => {
    console.log('\n*** Server Running on http://localhost:8000 ***\n');
  });