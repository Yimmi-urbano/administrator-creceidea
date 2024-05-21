import { DomainAsign, alertExito, alertError } from "/js/utils.js";
const domain = DomainAsign();

var editor = new EditorJS({
    tools: {

        image: {
            class: ImageTool,
            config: {
                uploader: {
                    uploadByFile(file) {
                        return new Promise((resolve, reject) => {
                            const formData = new FormData();
                            const domainPrimary = domain.split('.')[0];
                            formData.append('image', file);
                            fetch(apiUploadUrl + '/banner', {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'domain': domainPrimary
                                }
                            })
                                .then(response => response.json())
                                .then(result => {

                                    if (!result['error']) {

                                        resolve({ success: 1, file: { url: result['imageUrl'] } });
                                    } else {

                                        reject(result.message);
                                    }
                                })
                                .catch(error => {
                                    reject(error.message || 'Error al cargar la imagen');
                                });
                        });
                    }
                }
            }
        },
        header: {
            class: Header,
            inlineToolbar: true,
            tunes: ['customTune'],
            config: {
                placeholder: 'Header'
            },
            shortcut: 'CMD+SHIFT+H'
        },
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        embed: Embed,
        table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            tunes: ['customTune']
          },
        customTune: {
          class: CustomTool.default,
          config: {
            defaultColor: '#000000',
            defaultSize: '16px'
          }
        }
    }
});


document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        editor.blocks.insert('image', { file });
    }
});


const saveButton = document.getElementById('save-button');

async function savePage(body) {
    const domainPrimary = domain.split('.')[0];
    const title = document.getElementById('title-page').value.trim();
    const meta_description = document.getElementById('meta-description').value.trim();
    const meta_keywords = document.getElementById('meta-keywords').value.trim();
    const image_url = document.getElementById('image_url').value.trim()

    const myHeaders = new Headers();
    myHeaders.append("domain", domainPrimary);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "title": title,
        "image_default": image_url,
        "content": body,
        "seo_description": meta_description,
        "seo_keywords": meta_keywords,
        "is_available": true
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch("https://api-pages.creceidea.pe/api/pages", requestOptions);

        if (response.status === 201) {
            const result = await response.text();
            const redirect = '/page/list';
            const message = 'Página creada correctamente';
            const title = 'Ok';
            alertExito(title, message, redirect);
        } else {
            const message = await response.json();
            const redirect = '/page/new';
            const title = 'Error';
            alertError(title, message.message, redirect);
            throw new Error('Error en la respuesta del servidor');
        }
    } catch (error) {
        console.error('Se produjo un error:', error);
    }
}

saveButton.addEventListener('click', () => {
    editor.save().then(savedData => {

        const body = savedData;

        savePage(body)
    })
})
