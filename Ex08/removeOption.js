var removeOption = document.getElementById("remove-option");
var q9Select = document.getElementById("option-select");
removeOption.addEventListener("click", function (e) {
    e.preventDefault();
    q9Select.removeChild(q9Select.selectedOptions.item(0));
});
