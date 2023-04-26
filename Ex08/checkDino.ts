const checkboxes = document.getElementsByName("dino") as NodeListOf<HTMLInputElement>;
const dinoForm = document.getElementById("dino-form") as HTMLFormElement;
const backyardDino = document.getElementById("backyard-dino") as HTMLParagraphElement;
const backyardDinoOk = document.getElementById("backyard-dino-ok") as HTMLParagraphElement;
const check = document.getElementById("check") as HTMLButtonElement;

function checkDino(e:Event) {
    e.preventDefault()
    backyardDinoOk.setAttribute("hidden", "true")
    let checkedDino = false
    for (let index = 0; index < checkboxes.length; index++) {
        if ((checkboxes[index] as HTMLInputElement).checked) checkedDino = true
    }
    if (checkedDino) {
        backyardDino.setAttribute("hidden", "true")
        backyardDinoOk.removeAttribute("hidden")
    }
    else backyardDino.removeAttribute("hidden")
}

/* dinoForm.addEventListener("load", (e: Event) => {checkDino(e)}) */

/* dinoForm.addEventListener("change", (e: Event) => {checkDino(e)}) */

check.addEventListener("click", (e: Event) => {checkDino(e)})
