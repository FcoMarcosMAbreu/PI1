var convert = document.getElementById("convert");
var caseOptions = document.getElementsByName("convertion-selection");
var convertedParagraph = document.getElementById("converted-paragraph");
var paragraphToConvert = document.getElementById("paragraph-to-convert");
convert.addEventListener("click", function (e) {
    e.preventDefault();
    convertedParagraph.setAttribute("hidden", "true");
    for (var index = 0; index < caseOptions.length; index++) {
        if (caseOptions[index].value === "upper") {
            convertedParagraph.innerHTML = paragraphToConvert.value.toUpperCase();
            convertedParagraph.removeAttribute("hidden");
        }
        else if (caseOptions[index].value === "lower") {
            convertedParagraph.innerHTML = paragraphToConvert.value.toLowerCase();
            convertedParagraph.removeAttribute("hidden");
        }
    }
});
