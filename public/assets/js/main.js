import { DomainAsign } from "../../js/utils.js";
const domain = DomainAsign();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const pure = new PureCounter();
new PureCounter();



// general js project js
$(function () {
    "use strict";
    const root = document.documentElement;

    // main sidebar menu toggle js
    $('.sidebar-toggle').on('click', function () {
        $('body').toggleClass('sidebar-hide')
    });
    $('.rightbar-toggle').on('click', function () {
        $('body').toggleClass('rightbar-hide')
    });

    // main theme color setting js
    $('.choose-skin li').on('click', function () {
        const $body = $('body');
        const $this = $(this);
        const existTheme = $('.choose-skin li.active').data('theme');
        $('.choose-skin li').removeClass('active');
        $this.addClass('active');
        $body.attr('data-bvite', 'theme-' + $this.data('theme'));
    });

    // card full screen js
    const DIV_CARD = 'div.card';
    $('.card-fullscreen').on('click', function (e) {
        const $card = $(this).closest(DIV_CARD);
        $card.toggleClass('fullscreen');
        e.preventDefault();
        return false;
    });

    /** Function for remove card */
    $('[data-toggle="card-remove"]').on('click', function (e) {
        var $card = $(this).closest(DIV_CARD);
        $card.remove();
        e.preventDefault();
        return false;
    });

    // Box layout toggle
    const checkbox = document.querySelector('.boxlayout-toggle input[type="checkbox"]');
    checkbox.addEventListener('click', () => {
        const main = document.querySelector('main');
        const body = document.querySelector('body');
        if (checkbox.checked) {
            main.classList.add('container');
            main.classList.remove('container-fluid');
            body.classList.add('box-layout', 'rightbar-hide');
        } else {
            main.classList.add('container-fluid');
            main.classList.remove('container');
            body.classList.remove('box-layout', 'rightbar-hide');
        }
    });

    // Monochrome Mode
    $('.monochrome-toggle input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('body').addClass("monochrome");
        } else {
            $('body').removeClass("monochrome");
        }
    });

    // code-show
    $('.card-toggle-one input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.card-main-one').addClass("show");
        } else {
            $('.card-main-one').removeClass("show");
        }
    });

    $('.card-toggle-two input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.card-main-two').addClass("show");
        } else {
            $('.card-main-two').removeClass("show");
        }
    });

    $('.card-toggle-three input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.card-main-three').addClass("show");
        } else {
            $('.card-main-three').removeClass("show");
        }
    });

    $('.card-toggle-four input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.card-main-four').addClass("show");
        } else {
            $('.card-main-four').removeClass("show");
        }
    });

    // table-show
    $('.table-toggle-one input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-one').addClass("show");
        } else {
            $('.table-main-one').removeClass("show");
        }
    });

    $('.table-toggle-two input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-two').addClass("show");
        } else {
            $('.table-main-two').removeClass("show");
        }
    });

    $('.table-toggle-three input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-three').addClass("show");
        } else {
            $('.table-main-three').removeClass("show");
        }
    });

    $('.table-toggle-four input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-four').addClass("show");
        } else {
            $('.table-main-four').removeClass("show");
        }
    });

    $('.table-toggle-five input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-five').addClass("show");
        } else {
            $('.table-main-five').removeClass("show");
        }
    });

    $('.table-toggle-six input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('.table-main-six').addClass("show");
        } else {
            $('.table-main-six').removeClass("show");
        }
    });


    // gradient active
    $('.gradient-active input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('body').addClass("gradient");
        } else {
            $('body').removeClass("gradient");
        }
    });

    // radius-0
    $('.radius-toggle input:checkbox').on('click', function () {
        if ($(this).is(":checked")) {
            $('body').addClass("radius-0");
        } else {
            $('body').removeClass("radius-0");
        }
    });

    // Layout section light/dark toggle js
    function toggleTheme(selector) {
        const element = $(selector);
        if (element.attr('data-bs-theme') === 'none') {
            element.attr('data-bs-theme', 'dark');
        } else {
            element.attr('data-bs-theme', 'none');
        }
    }
    $('.brand-toggle input:checkbox').on('click', function () { toggleTheme('.brand'); });
    $('.sidebar-toggle input:checkbox').on('click', function () { toggleTheme('.sidebar'); });
    $('.header-toggle input:checkbox').on('click', function () { toggleTheme('header'); });
    $('.pheader-toggle input:checkbox').on('click', function () { toggleTheme('.page-header'); });
    $('.rightbar-toggle input:checkbox').on('click', function () { toggleTheme('.rightbar'); });

    // layout option toggle js
    $('.layout-option input:radio').on('click', function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.value
        }).get().join(" ")
        console.log(others)
        $('body').removeClass(others).addClass(this.value)
    });
    // svg icon stroke
    $('.svg-stroke input:radio').on('click', function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.value
        }).get().join(" ")
        console.log(others)
        $('body').removeClass(others).addClass(this.value)
    });
    // main layout border toggle js
    $('.border-toggle input:checkbox').on('click', function () {
        $('body').toggleClass('layout-border')
    });
    // sidebar icon color
    $('.svg-icon-color input:checkbox').on('click', function () {
        $('.menu-list').toggleClass('icon-color')
    });
    // card box shadow
    $('.cb-shadow input:checkbox').on('click', function () {
        $('.card').toggleClass('shadow-active')
    });


    // Password Meter
    $(".password-meter .form-control").on("input", function () {
        var matchedCriteria = 0;
        var password = $(this).val();
        var upperCase = new RegExp('[A-Z]');
        var lowerCase = new RegExp('[a-z]');
        var numbers = new RegExp('[0-9]');
        var specialChars = new RegExp('^(?=.*?[#?!@$%^&*-]).{1,}$');
        if (password.length > 7) {
            matchedCriteria++;
        }
        if (password.length > 0 && password.match(upperCase)) {
            matchedCriteria++;
        }
        if (password.length > 0 && password.match(lowerCase)) {
            matchedCriteria++;
        }
        if (password.length > 0 && password.match(numbers)) {
            matchedCriteria++;
        }
        if (password.length > 0 && password.match(specialChars)) {
            matchedCriteria++;
        }
        $(".password-meter .progress-bar")[0].style.width = (matchedCriteria * 20) + "%";
    })
    // Image file input
    $(".image-input .form-control").on("change", function () {
        var url = URL.createObjectURL(this.files[0]);
        $(this).parent().parent().children(".avatar-wrapper")[0].style.background = "url(" + url + ") no-repeat";
    })
    // table select all checkbox js
    $(".select-all.form-check-input").on('change', function () {
        //row-selectable
        var isChecked = $(this).is(":checked")
        var rows = $(this).parent().parent().parent().parent().parent().find(".row-selectable");
        if (rows.length > 0) {
            rows.each(function (index) {
                $(this).find(".form-check-input")[0].checked = isChecked;
            });
        }
    })

});

// Light/Dark
/*!
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/

(() => {
    'use strict'

    const storedTheme = localStorage.getItem('theme')
    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    const setTheme = function (theme) {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }
    setTheme(getPreferredTheme())
    const showActiveTheme = theme => {
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
        })

        btnToActive.classList.add('active')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (storedTheme !== 'light' || storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })
    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value')
                    localStorage.setItem('theme', theme)
                    setTheme(theme)
                    showActiveTheme(theme)
                })
            })
    })
})()


window.initApexChart = function (element, options) {
    if (element) {
        return new ApexCharts(element, options).render();
    }
    return null;
}

// rightbar tab: Tasks Analysis
initApexChart(document.querySelector("#Apex_TaskAssignin"), {
    chart: {
        height: 240,
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    colors: ['var(--theme-color1)', 'var(--theme-color2)', 'var(--theme-color4)'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Pending',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'In Progress',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Completed',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1

    },
});

if (document.getElementById('calendar')) {
    var calendar = new tui.Calendar('#calendar', {
        defaultView: 'month',
        taskView: true,
        template: {
            monthDayname: function (dayname) {
                return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
            }
        }
    });
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}


  const userTEXT = document.querySelector('li.user span');
  userTEXT.textContent = getCookieValue('domain');




  // @formatter:off
  document.addEventListener("DOMContentLoaded", function () {
    let options = {
      selector: '#tinymce-mytextarea',
      height: 300,
      menubar: false,
      statusbar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat',
      content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; -webkit-font-smoothing: antialiased; }'
    }
    if (localStorage.getItem("tablerTheme") === 'dark') {
      options.skin = 'oxide-dark';
      options.content_css = 'dark';
    }
    tinyMCE.init(options);
  })
  // @formatter:on

   // Registrar los plugins requeridos
   FilePond.registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
  );

  // Seleccionar el input y crear una instancia de FilePond
  FilePond.create(
    document.querySelector('input[type="file"]'),
    {
      labelIdle: `Arrastra y suelta tu imagen o <span class="filepond--label-action">Busca</span>`,
      imagePreviewHeight: 250,
      server: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
            const domainPrimary = domain.split('.')[0];
          // Crear un FormData y agregar el archivo
          const formData = new FormData();
          formData.append(fieldName, file, file.name);
          const myHeaders = new Headers();
          myHeaders.append("domain", domainPrimary);

          // Realizar la solicitud Fetch
          fetch('https://api-upload.creceidea.pe/image/product', {
            method: 'POST',
            headers: myHeaders,
            body: formData
          })
            .then(response => {
              // Verificar si la solicitud fue exitosa
              if (response.ok || response.type === 'opaque') {
                return response.json(); // Parsear la respuesta JSON
              } else {
                return response.json().then(err => {
                  throw new Error(err.message || 'Error al subir la imagen');
                });
              }
            })
            .then(data => {
              // Manejar los datos recibidos
              console.log(data);
              // Suponiendo que `data` tiene una propiedad `url` con la URL de la imagen
              $('#image_url').val(data.imageUrl);
              load(data.url); // Llamar a `load` con la URL de la imagen
            })
            .catch(err => {
              console.error('Error:', err);
              error('Error de red');
            });
        }
      }
    }
  );
