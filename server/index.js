const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3024;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})