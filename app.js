const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");
const helmet = require('helmet');
const { response } = require('./src/middleware/common.js');
const app = express();
const port = process.env.PORT;
const mainRouter = require('./src/routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use('/', mainRouter);
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  response(res, 404, false, null, '404 Not Found');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});