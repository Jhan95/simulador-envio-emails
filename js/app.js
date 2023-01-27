document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');


    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetForm();
    })

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetForm();

            const mensajeExito = document.createElement('P');
            mensajeExito.classList.add('bg-green-500', 'text-white', 'text-center', 'font-bold', 'p-2', 'uppercase');
            mensajeExito.textContent = 'Proyecto Finalizado';

            formulario.appendChild(mensajeExito);

            setTimeout(() => {
                mensajeExito.remove();
            }, 2000);
        }, 3000);
    }

    function validar(e){

        if(e.target.value.trim() === ''){
            imprimirAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if( e.target.id === 'email' && !validarEmail(e.target.value)){
            imprimirAlerta('El Email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    }

    function imprimirAlerta(mensaje, referencia){

        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'text-center', 'p-2', 'alerta');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){

        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){

        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetForm(){

        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});