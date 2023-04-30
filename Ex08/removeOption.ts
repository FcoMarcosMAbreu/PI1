const removeOption = document.getElementById("remove-option") as HTMLButtonElement;
const q9Select = document.getElementById("option-select") as HTMLSelectElement;

removeOption.addEventListener("click", (e: Event) => {
    e.preventDefault();
    q9Select.removeChild((q9Select.selectedOptions.item(0) as HTMLOptionElement))
})