var lista1 = document.getElementById("lista-1");
var lista2 = document.getElementById("lista-2");
var l1l2 = document.getElementById("l1l2");
var l2l1 = document.getElementById("l2l1");
l1l2.addEventListener("click", function (e) {
    e.preventDefault();
    if (lista1.selectedOptions.length > 0) {
        lista2.appendChild(lista1.selectedOptions.item(0));
    }
});
l2l1.addEventListener("click", function (e) {
    e.preventDefault();
    if (lista2.selectedOptions.length > 0) {
        lista1.appendChild(lista2.selectedOptions.item(0));
    }
});
