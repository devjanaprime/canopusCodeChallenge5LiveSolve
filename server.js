// DO NOT MODIFY
let express = require('express');
let bodyParser = require('body-parser');
let heroRouter = require('./routes/hero');
require('./modules/db'); // require db module to connect to the database

let app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// routers
app.use('/hero', heroRouter);

// server port set and listen
let serverPort = 3000;

let server = app.listen(serverPort, () => {
  console.log('up and listening on', server.address().port);
});
