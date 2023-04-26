/* const q3 = document.getElementById("q3") as HTMLFormElement; */
var q4 = document.getElementById("q4"); // Nem vai ser usado... :P
/* q3?.addEventListener("click", (e) => { */
var selImage = document.getElementById("sel-image");
selImage === null || selImage === void 0 ? void 0 : selImage.addEventListener("change", function (e) {
    e.preventDefault();
    /*
    const formattedFormData = new FormData(q3)
    const data = formattedFormData.get('upload-file') as File
    const image = document.createElement("img") as HTMLImageElement
    image.id = "image";
    image.src = data['name'];
    image.alt = data['name'];
    (document.getElementById("resultado") as HTMLDivElement).appendChild(image)
     */
    document.getElementById("resultado").innerHTML = "";
    var image = document.createElement("img");
    image.id = "image";
    /* image.src = (document.getElementById("path") as HTMLInputElement).value; */
    image.src = e.target.value;
    /* image.alt = (document.getElementById("path") as HTMLInputElement).value; */
    image.alt = e.target.value;
    document.getElementById("resultado").appendChild(image);
});
