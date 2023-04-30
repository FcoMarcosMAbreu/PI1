const lista1 = document.getElementById("lista-1") as HTMLSelectElement;
const lista2 = document.getElementById("lista-2") as HTMLSelectElement;
const l1l2 = document.getElementById("l1l2") as HTMLButtonElement;
const l2l1 = document.getElementById("l2l1") as HTMLButtonElement;

l1l2.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (lista1.selectedOptions.length > 0) {
        lista2.appendChild(lista1.selectedOptions.item(0) as HTMLOptionElement);
    }
})

l2l1.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (lista2.selectedOptions.length > 0) {
        lista1.appendChild(lista2.selectedOptions.item(0) as HTMLOptionElement);
    }
})