/* const q3 = document.getElementById("q3") as HTMLFormElement; */
const q4 = document.getElementById("q4") as HTMLFormElement; // Nem vai ser usado... :P

/* q3?.addEventListener("click", (e) => { */
const selImage = document.getElementById("sel-image") as HTMLSelectElement
selImage?.addEventListener("change", (e: Event) => {
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

    
    (document.getElementById("resultado") as HTMLDivElement).innerHTML = ""
    
    const image = document.createElement("img") as HTMLImageElement
    image.id = "image";
    /* image.src = (document.getElementById("path") as HTMLInputElement).value; */
    image.src = (e.target as HTMLOptionElement).value;
    /* image.alt = (document.getElementById("path") as HTMLInputElement).value; */
    image.alt = (e.target as HTMLOptionElement).value;
    (document.getElementById("resultado") as HTMLDivElement).appendChild(image)

});