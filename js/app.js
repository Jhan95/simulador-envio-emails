//Variables
const btnEnviar = document.querySelector('#enviar');


//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}


//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}