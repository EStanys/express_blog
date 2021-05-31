const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// register view engine
app.set('view engine', 'ejs');
// nustatom render use home directorija
app.set('views', 'src/views');

//home page
app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  // paimti index.ejs faila is views direktorijos(render zinos kad ieskot view folderi)
  res.render('index');
});

// about page
app.get('/about', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about');
});

// blog page
app.get('/blog', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('blog');
});

const staticPath = path.join(__dirname, 'static');
// statine direktorija css, js, img ir kt statiniam failams

app.use(express.static(staticPath));

// 404 case - kai vartotojas ivede puslapi kurio nera

app.use((req, res) => res.status(404).send('Ooops... Page Not found'));

app.listen(PORT);
