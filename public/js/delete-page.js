import { deletePage } from './functions.js';
import { openLoader } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const deleteBtns = document.querySelectorAll('.deletePageBtn');

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', async () => {
            const pageId = deleteBtn.getAttribute('data-idpage');
            const elementToRemove = document.getElementById('element_' + pageId);
            openLoader();
            const success = await deletePage(pageId);
            if (success) {
                $('#loaderModal').modal('hide');
                if (elementToRemove) {
                    elementToRemove.remove();
                } else {
                    console.error('Element with ID element_' + pageId + ' not found');
                }
            }
        });
    });
});
