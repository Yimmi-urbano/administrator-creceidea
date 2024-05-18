const express = require('express');
const path = require('path');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const {fetchDomain} = require('./services');
const app = express();
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {
    res.locals.domains = await fetchDomain('https://storage.googleapis.com/stores-crece/central/data-center/domain.json');
    next();
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
