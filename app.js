const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require("./config.json")
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dbURI = config.mdb
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log(`Connected to Database at ${new Date().toLocaleString('en-US')}`))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

app.listen(3000, function(err){
    if (err) console.log("Error on server setup.")
    console.log("Server listening on port", this.address().port );
})

module.exports = app;
