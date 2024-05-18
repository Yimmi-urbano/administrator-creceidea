export function getSessionStorageValue(key) {
    const value = sessionStorage.getItem(key);
    return value !== null ? value : null;
}

export function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}


export function DomainAsign() {
    return getCookieValue('domain')
}

export function alertExito(title, message, redirect) {

    const contetnHTML = `<div class="modal fade" id="statusSuccessModal" tabindex="-1" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false"> 
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document"> 
        <div class="modal-content"> 
            <div class="modal-body text-center p-lg-4"> 
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#198754" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline class="path check" fill="none" stroke="#198754" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " /> 
                </svg> 
                <h4 class="text-success mt-3">${title}</h4> 
                <p class="mt-3">${message}</p>
                <button type="button" class="btn btn-sm mt-3 btn-success" data-bs-dismiss="modal">Ok</button> 
            </div> 
        </div> 
    </div> 
</div>`;

    $('body').append(contetnHTML)
    $('#statusSuccessModal').modal('show');
    $('#statusSuccessModal').on('hidden.bs.modal', function () {
        $('#statusSuccessModal').remove();
        window.location.href = redirect;
    });

}


export function alertError(title, message, redirect) {

    const contentHTML = `<div class="modal fade" id="statusErrorsModal" tabindex="-1" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false"> 
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document"> 
        <div class="modal-content"> 
            <div class="modal-body text-center p-lg-4"> 
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#db3646" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" /> 
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                    <line class="path line" fill="none" stroke="#db3646" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" X2="34.4" y2="92.2" /> 
                </svg> 
                <h4 class="text-danger mt-3">${title}</h4> 
                <p class="mt-3">${message}</p>
                <button type="button" class="btn btn-sm mt-3 btn-danger" data-bs-dismiss="modal">Ok</button> 
            </div> 
        </div> 
    </div> 
</div>`;

    $('body').append(contentHTML)
    $('#statusErrorsModal').modal('show');
    $('#statusErrorsModal').on('hidden.bs.modal', function () {
        $('#statusErrorsModal').remove();
        window.location.href = redirect;
    });

}


export function openLoader() {
    $('#loaderModal').modal('show');
}

export async function closedLoader() {

    $('#loaderModal').modal('hide');
}

$('#loaderModal').on('hidden.bs.modal', function () {
    console.log('cerrado...')
});