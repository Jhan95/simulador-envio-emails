//Varriables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}



//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function validarFormulario(e) {

    if(  e.target.value.length > 0 ) {
        console.log('Si hay algo');
    } else {
        e.target.classList.add('border', 'border-red-500');

        mostrarError();
    }
}

function mostrarError() {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'text-center', 'mt-5', 'error');

    const errores = document.querySelectorAll('.error');
    if( errores.length === 0 ) {
        formulario.appendChild(mensajeError);
    }


}