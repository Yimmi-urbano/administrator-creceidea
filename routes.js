const express = require('express');
const router = express.Router();
const { fetchProducts, fetchPages } = require('./services')
require('dotenv').config();

const errorHandler = (req, res, next) => {
    try {
        next();
    } catch (error) {
        console.error('Error al manejar la solicitud:', error);
        res.status(500).send('Error al manejar la solicitud');
    }
};
router.use(errorHandler);

router.get('/product/list', async (req, res) => {
    try {
        const domain = req.cookies.domain;
        const products = await fetchProducts(domain);
        const directory = 'inventory';
        res.render('index', { productsData: products, contentTemplate: 'index', module: directory });

    } catch (error) {
        res.render('error_page', { error: error });
    }
});

router.get('/product/new', async (req, res) => {
    try {

        const directory = 'inventory';
        res.render('index', { contentTemplate: 'new-product', module: directory });

    } catch (error) {
        res.render('error_page', { error: error });
    }
});

router.get('/page/new', async (req, res) => {
    try {

        const directory = 'pages';

        res.render('index', { contentTemplate: 'page-new', module: directory });
    } catch (error) {
        res.render('error_page', { error: error });
    }
});

router.get('/page/list', async (req, res) => {
    try {

        const directory = 'pages';
        const domain = req.cookies.domain;
        const pages = await fetchPages(domain);
        res.render('index', { listsPages: pages, contentTemplate: 'list-page', module: directory });
    } catch (error) {
 
        res.render('error_page', { error: error });
    }
});

router.get('/styles', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.render('styles');
});


module.exports = router;
