window.sr = ScrollReveal();

sr.reveal('.acercaDeMi__titulo, .skillsAndHobbies__titulo, .formacion__titulo, .experiencia__titulo',
{
    duration: 3000,
});


sr.reveal('.presentacion__container-one, .experiencia__container-img, .formularioContacto__container',
{
    duration: 3000,
    origin: 'left',
    distance: '100px'
});

sr.reveal('.presentacion__container-two img, .experiencia__container-text, .formularioContacto__form',
{
    duration: 3000,
    origin: 'rigth',
    distance: '100px'
});

sr.reveal('.formacion__item-img',
{
    duration: 3000,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.acercaDeMi__parrafo, .skillsAndHobbies__lista-container, .formacion__item-carrera, .formacion__item-descripcion',
{
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});


