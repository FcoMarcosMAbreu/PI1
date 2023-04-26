const q2 = document.getElementById("q2") as HTMLFormElement;

q2?.addEventListener("submit", (e) => {
    e.preventDefault();

    const operand = Number((document.getElementById("operand") as HTMLInputElement).value);
    const operator = Number((document.getElementById("operator") as HTMLInputElement).value);

    if (isNaN(operand) || isNaN(operator)) {
        document.getElementById("alert")?.removeAttribute("hidden")
    } else {
        (document.getElementById("result") as HTMLOListElement).innerHTML = ""
        document.getElementById("alert")?.setAttribute("hidden", "true")
        let fibonacci: number[] = []
        for (let index = 0; index < operator; index++) {
            if (index == 0) fibonacci[index] = operand
            else if (index == 1) fibonacci[index] = operand + 1
            else fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1]
        }
        let result = document.getElementById("result") as HTMLOListElement
        fibonacci.forEach(fnum => {
            let li: HTMLLIElement = document.createElement("li")
            let text = document.createTextNode(fnum.toString())
            li.appendChild(text)
            result.appendChild(li)
        });
        document.getElementById("result")?.removeAttribute("hidden")
    }
});