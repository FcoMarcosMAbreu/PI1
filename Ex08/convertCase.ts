const convert = document.getElementById("convert") as HTMLButtonElement;
const caseOptions = document.getElementsByName("convertion-selection") as NodeListOf<HTMLOptionElement>;
const convertedParagraph = document.getElementById("converted-paragraph") as HTMLParagraphElement;
const paragraphToConvert = document.getElementById("paragraph-to-convert") as HTMLTextAreaElement

convert.addEventListener("click", (e: Event) => {
    e.preventDefault();
    convertedParagraph.setAttribute("hidden", "true")
    for (let index = 0; index < caseOptions.length; index++) {
        if (caseOptions[index].value === "upper") {
            convertedParagraph.innerHTML = paragraphToConvert.value.toUpperCase()
            convertedParagraph.removeAttribute("hidden")
        } else if (caseOptions[index].value === "lower") {
            convertedParagraph.innerHTML = paragraphToConvert.value.toLowerCase()
            convertedParagraph.removeAttribute("hidden")
        }
    }
})

