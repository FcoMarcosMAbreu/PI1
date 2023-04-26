var q2 = document.getElementById("q2");
q2 === null || q2 === void 0 ? void 0 : q2.addEventListener("submit", function (e) {
    var _a, _b, _c;
    e.preventDefault();
    var operand = Number(document.getElementById("operand").value);
    var operator = Number(document.getElementById("operator").value);
    if (isNaN(operand) || isNaN(operator)) {
        (_a = document.getElementById("alert")) === null || _a === void 0 ? void 0 : _a.removeAttribute("hidden");
    }
    else {
        document.getElementById("result").innerHTML = "";
        (_b = document.getElementById("alert")) === null || _b === void 0 ? void 0 : _b.setAttribute("hidden", "true");
        var fibonacci = [];
        for (var index = 0; index < operator; index++) {
            if (index == 0)
                fibonacci[index] = operand;
            else if (index == 1)
                fibonacci[index] = operand + 1;
            else
                fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
        }
        var result_1 = document.getElementById("result");
        fibonacci.forEach(function (fnum) {
            var li = document.createElement("li");
            var text = document.createTextNode(fnum.toString());
            li.appendChild(text);
            result_1.appendChild(li);
        });
        (_c = document.getElementById("result")) === null || _c === void 0 ? void 0 : _c.removeAttribute("hidden");
    }
});
