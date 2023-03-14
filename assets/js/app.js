import { validar, validarTextarea } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validar(input.target)
    })
});

textarea.forEach(textarea => {
    textarea.addEventListener('blur', (textarea) => {
        validarTextarea(textarea.target)
    })
})