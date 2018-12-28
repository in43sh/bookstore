const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})
const port = process.env.PORT;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );