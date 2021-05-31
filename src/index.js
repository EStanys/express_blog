const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');

// home page
app.get('/', function (req, res) {
  // paimti index.ejs faila is views direktorijos
  res.render('index');
});

// about page
app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About us',
  });
});

// blog page
app.get('/blog', function (req, res) {
  res.render('blog');
});

// contact page
app.get('/contact', function (req, res) {
  res.render('contact');
});

const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

app.listen(PORT);
