import { postProducts, printCategories, getSelectedOptions } from './functions.js';

const button = document.getElementById('guardar_products');
const title = document.getElementById('title');
const price_regular = document.getElementById('price-regular');
const price_sale = document.getElementById('price-sale');
const imageURL = document.getElementById('image_url');
const getSelectedOptionsBTN = document.getElementById('getSelectedOptions');


button.addEventListener('click', () => {
    const title_product = title.value.trim();
    const regular_price = price_regular.value.trim();
    const sale_price = price_sale.value.trim();
    const image_url = imageURL.value.trim();
    const descriptionShort = tinymce.get('tinymce-mytextarea').getContent();

    const data_product = { descriptionShort: descriptionShort, imageURL: image_url, title_product: title_product, regular_price: regular_price, sale_price: sale_price }


    if (title_product === '') {
        alert('El título no puede estar vacío');
        return;
    }

    try {
        postProducts(data_product);
    } catch (error) {
        console.error('Error posting product:', error);
        alert('Hubo un error al guardar el producto');
    }
});

getSelectedOptionsBTN.addEventListener('click', () => {

    getSelectedOptions()
})

printCategories()