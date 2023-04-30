/* usar createElement() e appendChild() */
var inputOption = document.getElementById("input-option");
var appendOption = document.getElementById("append-option");
var optionSelect = document.getElementById("option-select");
var optionList = document.getElementsByClassName("option-item");
appendOption.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    var newOptionItem = document.createElement("option");
    newOptionItem.value = inputOption.value;
    newOptionItem.className = "option-item";
    var optionYetExist = false;
    if ((optionSelect.childNodes.length < 5) && (optionSelect.childNodes.length > 0) && (inputOption.value.length > 0)) {
        for (var index = 0; index < optionSelect.childNodes.length; index++) {
            if (((_a = optionList.item(index)) === null || _a === void 0 ? void 0 : _a.text.toLowerCase()) === inputOption.value.toLowerCase()) {
                optionYetExist = true;
            }
        }
        if (!optionYetExist) {
            newOptionItem.text = inputOption.value;
            optionSelect.appendChild(newOptionItem);
        }
    }
    else if ((optionSelect.childNodes.length == 0) && (inputOption.value.length > 0)) {
        newOptionItem.text = inputOption.value;
        optionSelect.appendChild(newOptionItem);
    }
});
