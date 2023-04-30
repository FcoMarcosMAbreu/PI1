/* usar createElement() e appendChild() */

const inputOption = document.getElementById("input-option") as HTMLInputElement;
const appendOption = document.getElementById("append-option") as HTMLButtonElement;
const optionSelect = document.getElementById("option-select") as HTMLSelectElement;
const optionList = document.getElementsByClassName("option-item") as HTMLCollectionOf<HTMLOptionElement>;


appendOption.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const newOptionItem = document.createElement("option");
    newOptionItem.value = inputOption.value;
    newOptionItem.className = "option-item";
    let optionYetExist = false;
    if ((optionSelect.childNodes.length < 5) && (optionSelect.childNodes.length > 0) && (inputOption.value.length > 0)) {
        for (let index = 0; index < optionSelect.childNodes.length; index++) {
            if (optionList.item(index)?.text.toLowerCase() === inputOption.value.toLowerCase()) {
                optionYetExist = true;
            }
        }
        if (!optionYetExist) {
            newOptionItem.text = inputOption.value;
            optionSelect.appendChild(newOptionItem);
        }
    } else if ((optionSelect.childNodes.length == 0) && (inputOption.value.length > 0)) {
        newOptionItem.text = inputOption.value;
        optionSelect.appendChild(newOptionItem);
    }
})