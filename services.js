const axios = require('axios');
let hostname = [];

async function fetchProducts(domain) {
    hostname = domain.split('.')[0];
    const headers = {
        'domain': hostname,
    };
    try {
        const response = await axios.get(`https://api-products.creceidea.pe/api/products`, {
            headers: headers
        });

        return response.data.products;
    } catch (error) {
        throw new Error('Error al obtener datos de la API');
    }
}

async function fetchPages(domain) {
    hostname = domain.split('.')[0];
    const headers = {
        'domain': hostname,
    };
    try {
        const response = await axios.get(`https://api-pages.creceidea.pe/api/pages`, {
            headers: headers
        });

        return response.data;
    } catch (error) {
        throw new Error('Error al obtener datos de la API');
    }
}

async function fetchDomain(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return [];
    }
}

module.exports = {

    fetchProducts,
    fetchPages,
    fetchDomain
}