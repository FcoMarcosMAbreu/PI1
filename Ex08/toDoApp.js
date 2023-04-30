var challenge = document.getElementById("challenge");
var taskList = document.getElementById("task-list");
var inputTask = document.getElementById("input-task");
inputTask.addEventListener("keydown", function (ev) {
    //ev.preventDefault();
    if (ev.key === "Enter" && inputTask.value.trim() !== "") {
        var taskCheckbox = document.createElement("input");
        taskCheckbox.id = Math.trunc(Math.random() * 10000).toString();
        taskCheckbox.type = "checkbox";
        var taskLabel = document.createElement("label");
        taskLabel.htmlFor = taskCheckbox.id;
        taskLabel.textContent = inputTask.value;
        var removeTask = document.createElement("button");
        removeTask.id = "rem-t-" + taskCheckbox.id;
        removeTask.textContent = "➖";
        var taskDiv = document.createElement("div");
        taskDiv.id = "task-" + taskCheckbox.id;
        taskDiv.append(taskCheckbox, taskLabel, removeTask);
        taskList.appendChild(taskDiv);
        removeTask.addEventListener("click", function (e) {
            var _a, _b;
            e.stopPropagation(); // prevent event from bubbling up
            //(((e.target as HTMLButtonElement).parentElement as HTMLDivElement).parentElement as HTMLDivElement).removeChild((e.target as HTMLButtonElement).parentElement as HTMLDivElement);
            //document.getElementById(removeTask.id)?.parentElement?.parentElement?.removeChild(taskDiv);
            (_b = (_a = e.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(e.currentTarget.parentElement);
        });
        inputTask.value = "";
    }
});
