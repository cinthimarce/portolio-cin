const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY >60)
});

const menu = document.querySelector('#menu-icon'); // Ícono del menú
const navbar = document.querySelector('.navbar'); // Navbar completo

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x'); // Cambia el ícono del menú
    navbar.classList.toggle('open'); // Cambia la clase para mostrar/ocultar el menú
});


/*SCROLL BTN*/

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*SKILL SECTION*/

const designBtn = document.querySelector(".design-btn");
const codeBtn = document.querySelector(".code-btn");

const designList = document.querySelector(".design-list");
const codeList = document.querySelector(".code-list");

designBtn.addEventListener('click', ()=>{
    designBtn.classList.add("active");
    codeBtn.classList.remove("active");
    designList.classList.add("show");
    codeList.classList.remove("show");
});
codeBtn.addEventListener('click', ()=>{
    designBtn.classList.remove("active");
    codeBtn.classList.add("active");
    designList.classList.remove("show");
    codeList.classList.add("show");
})


/*FILTER PORTA*/

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }
        
        this.classList.add('current');

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}


/* Button Language*/

/* var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../assets/en/index.html";
    }else{
        location.href="../index.html";
        }
    
} */


/*CVFiles*/

// Rutas para los archivos PDF según el idioma
const cvFiles = {
    es: "./assets/pdf/cv-cinthiamunoz.pdf",  // Archivo en español
    en: "./assets/pdf/cv-cinthiamunoz-en.pdf" // Archivo en inglés
};

// Obtener el idioma guardado en localStorage, o 'es' si no está definido
function getLanguage() {
    return localStorage.getItem("language") || "es"; // Idioma por defecto: español
}

// Actualiza el enlace y texto del botón de descarga según el idioma
function updateCvButton() {
    const language = getLanguage(); // Obtener el idioma actual
    const cvDownload = document.getElementById("cvDownload"); // Enlace de descarga
    const downloadText = document.getElementById("downloadText"); // Texto del botón

    // Actualizar el enlace de descarga
    if (cvDownload) {
        cvDownload.href = cvFiles[language] || cvFiles["es"]; // Cambiar el enlace según el idioma
    }

    // Actualizar el texto del botón
    if (downloadText) {
        downloadText.textContent = language === "en" ? "Download CV" : "Descargar CV";
    }

    // Log para verificar el enlace asignado
    console.log(`Idioma detectado: ${language}, Enlace asignado: ${cvDownload.href}`);
}

/* Flags Languages*/
// Cambiar el idioma cuando el usuario haga clic en una bandera
const flagsElements = document.querySelectorAll(".flags__item");

flagsElements.forEach((flag) => {
    flag.addEventListener("click", (e) => {
        const language = e.currentTarget.dataset.language; // Obtener el idioma de la bandera seleccionada
        localStorage.setItem("language", language); // Guardar el idioma en localStorage
        changeLanguage(language); // Actualizar la página con el nuevo idioma
        updateCvButton(); // Actualizar el enlace de descarga
    });
});

// Función para cargar los textos del idioma seleccionado desde un archivo JSON
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        if (section === "icon") {
            textToChange.className = texts.icon[value];
        } else {
            textToChange.textContent = texts[section][value];
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Establecer idioma predeterminado si no hay un idioma guardado en localStorage
    const language = localStorage.getItem("language") || "es"; // Si no hay idioma en localStorage, se asigna 'es'
    changeLanguage(language); // Cambia el idioma con el valor guardado o el predeterminado

    // Actualizar el botón de descarga para el idioma cargado
    updateCvButton(); // Este es el código que se asegura de que el enlace de descarga esté correcto
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('dragstart', event => event.preventDefault());
