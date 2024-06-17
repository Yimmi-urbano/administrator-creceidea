import { DomainAsign, alertExito, closedLoader } from "./utils.js";
const domain = DomainAsign();

export async function postProducts(data_product) {
  const domainPrimary = domain.split('.')[0];
  event.preventDefault();

  const body = {
    "id": "CASACA00032BC00000",
    "title": data_product.title_product,
    "type_product": "basic",
    "image_default": [`${data_product.imageURL}`],
    "category": [],
    "stock": "100",
    "is_available": true,
    "price": {
      "regular": data_product.regular_price,
      "sale": data_product.sale_price,
      "tag": ""
    },
    "is_trash": {
      "date": "",
      "status": false
    },
    "default_variations": [
      "attr002",
      "attr005"
    ],
    "atributos": [
      {
        "name_attr": "Talla",
        "values": [
          {
            "Id": "attr001",
            "valor": "S"
          },
          {
            "Id": "attr002",
            "valor": "M"
          },
          {
            "Id": "attr003",
            "valor": "L"
          }
        ]
      },
      {
        "name_attr": "Color",
        "values": [
          {
            "Id": "attr004",
            "valor": "rojo"
          },
          {
            "Id": "attr005",
            "valor": "verde"
          },
          {
            "Id": "attr006",
            "valor": "amarillo"
          }
        ]
      }
    ],
    "variations": [
      {
        "chill_attr": [
          "attr001",
          "attr006"
        ],
        "price": {
          "regular": 50,
          "sale": 40,
          "tag": "x 3 meses"
        }
      },
      {
        "chill_attr": [
          "attr002",
          "attr005"
        ],
        "price": {
          "regular": 100,
          "sale": 80,
          "tag": "x 6 meses"
        }
      },
      {
        "chill_attr": [
          "attr003",
          "attr004"
        ],
        "price": {
          "regular": 160,
          "sale": 90,
          "tag": "x 12 meses"
        }
      }
    ],
    "description_long": "<ul>\n<li> Costo mínimo de Instalación</li>\n<li>100% Fibra Óptica</li>\n<li>Internet Simétrico</li>\n<li>Duplica x 3 meses</li>\n</ul>",
    "description_short": data_product.descriptionShort
  };

  try {

    const response = await fetch(apiProductsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "domain": domainPrimary
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    const redirect = '/product/list';
    const message = 'Producto creado correctamente.';
    const title = 'Ok';
    alertExito(title, message, redirect);

  } catch (error) {
    console.error('Error al guardar los productos:', error);
  }
}

export async function deletePage(pageId) {
  const domainPrimary = domain.split('.')[0];
  const myHeaders = new Headers();
  myHeaders.append("domain", domainPrimary);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://api-pages.creceidea.pe/api/pages/${pageId}`, requestOptions);
    if (response.status === 200) {
      const result = await response.text();
      return true;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
    return false;
  }
}

export async function deleteProduct(productID) {
  const domainPrimary = domain.split('.')[0];
  const myHeaders = new Headers();
  myHeaders.append("domain", domainPrimary);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://api-products.creceidea.pe/api/products/${productID}/trash`, requestOptions);
    if (response.status === 200) {
      const result = await response.text();
      return true;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
    return false;
  }
}

export async function printCategories() {
  const domains = DomainAsign();
  console.log(domains)
  const domainPrimary = domains.split('.')[0];
  const myHeaders = new Headers();
  myHeaders.append("domain", domainPrimary);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://api-products.creceidea.pe/api/categories`, requestOptions);
    if (response.status === 200) {
      const optionsArray = await response.json();
      createCheckboxes(optionsArray);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
    
  }

  
}
// Función para generar dinámicamente los checkboxes
function createCheckboxes(array) {
  const form = document.getElementById('checkbox-form');
  form.innerHTML = '';  // Limpiar el contenido previo

  array.forEach(option => {
      // Crear un checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = option;
      checkbox.name = 'options';
      checkbox.value = option;

      // Crear una etiqueta para el checkbox
      const label = document.createElement('label');
      label.htmlFor = option;
      label.textContent = option.charAt(0).toUpperCase() + option.slice(1);  // Capitalizar la primera letra

      // Añadir el checkbox y la etiqueta al formulario
      form.appendChild(checkbox);
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
  });
}

// Función para obtener las opciones seleccionadas
export function getSelectedOptions() {
  const checkboxes = document.querySelectorAll('input[name="options"]:checked');
  const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);
  console.log(selectedOptions);
  // Aquí puedes manejar los datos, como enviarlos a un servidor o mostrarlos en la página
}


