const elemento = document.getElementById("algúnElemento");
if (elemento) {
    elemento.innerHTML = "algun texto";
} else {
    console.error("Elemento no encontrado: 'algúnElemento'");
}
