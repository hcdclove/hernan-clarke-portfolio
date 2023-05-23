const express = required('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
