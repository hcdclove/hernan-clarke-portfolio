const express = require('express');
const bodyParser = require('body-parser');

// Server side security settings
require('dotenv').config();

const herokuPost = process.env.PORT;
const localPort = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const choice = req.body.choice || req.body.runme1;
  // console.log(choice);
  switch (choice) {
    case 'execmng':
      res.render('execmng');
      break;
    case 'projmng':
      res.render('projmng');
      break;
    case 'sixsigma':
      res.render('sixsigma');
      break;
    case 'enterprisepm':
      res.redirect('https://patents.google.com/patent/US20060053043');
      break;
    case 'schedulingpatent':
      res.redirect('https://patents.justia.com/patent/20020015059');
      break;
    case 'enterprisewide':
      res.redirect('https://patents.justia.com/patent/7171375');
      break;
    case 'rumme1':
      res.redirect('https://hc-newsletter-app.herokuapp.com/');
      break;
    case 'code1':
      res.redirect(
        'https://github.com/hcdclove/hc-newsletter-signup/tree/master'
      );
    case 'rumme2':
      res.redirect('https://majestic-figolla-a96469.netlify.app/');

      break;
    case 'code2':
      res.redirect('https://github.com/hcdclove/justapp.git');

      break;

    default:
      break;
  }
});

app.listen(herokuPost || localPort, () => {});
