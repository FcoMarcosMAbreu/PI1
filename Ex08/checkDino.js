var checkboxes = document.getElementsByName("dino");
var dinoForm = document.getElementById("dino-form");
var backyardDino = document.getElementById("backyard-dino");
var backyardDinoOk = document.getElementById("backyard-dino-ok");
var check = document.getElementById("check");
function checkDino(e) {
    e.preventDefault();
    backyardDinoOk.setAttribute("hidden", "true");
    var checkedDino = false;
    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked)
            checkedDino = true;
    }
    if (checkedDino) {
        backyardDino.setAttribute("hidden", "true");
        backyardDinoOk.removeAttribute("hidden");
    }
    else
        backyardDino.removeAttribute("hidden");
}
/* dinoForm.addEventListener("load", (e: Event) => {checkDino(e)}) */
/* dinoForm.addEventListener("change", (e: Event) => {checkDino(e)}) */
check.addEventListener("click", function (e) { checkDino(e); });
