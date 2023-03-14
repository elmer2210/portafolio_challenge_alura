export function validar(input) {
    const tipoImput = input.dataset.tipo;

    if (input.validity.valid) {
        input.classList.remove("input-error--invalid");
        input.classList.add("formularioContacto__form-input");
        input.parentElement.querySelector(".input-message-error").innerHTML= ""; 
    }else{
        input.classList.remove("formularioContacto__form-input");
        input.classList.add("input-error--invalid"); 
        input.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeDeError(tipoImput, input); 
        input.focus();
    };
};

export function  validarTextarea(textarea) {
    const tipoImput = textarea.dataset.tipo;
    if (textarea.validity.valid) {
        textarea.classList.remove("input-error--invalid-text");
        textarea.classList.add("formularioContacto__form-text");
        textarea.parentElement.querySelector(".input-message-error").innerHTML= ""; 
    }else{
        textarea.classList.remove("formularioContacto__form-text");
        textarea.classList.add("input-error--invalid-text"); 
        textarea.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeDeError(tipoImput, textarea); 
        textarea.focus();
    };
}

const tipoDeErrores = [
    'valueMissing',
    'typeMisMatch',
    'patterMisMatch',
    'customError'
]

const mensajesDeError = {
    nombres: {
        valueMissing: "El campo Nombre no puede estar vacío."
    }, 
    email :{
        valueMissing: "El campo Correo no puede estar vacío.",
        typeMisMatch: "El correo no es válido"
    },
    asunto :{
        valueMissing: "Debe ingresar un asunto del mensaje."
    },
    mensaje :{
        valueMissing:"Debe redactar un mensaje."
    }

}

function mostrarMensajeDeError(tipoDeImput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeImput][error];
        }
    })

    return mensaje;

};