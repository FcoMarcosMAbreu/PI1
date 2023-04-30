const challenge = document.getElementById("challenge") as HTMLFormElement;
const taskList = document.getElementById("task-list") as HTMLDivElement;
const inputTask = document.getElementById("input-task") as HTMLInputElement;

inputTask.addEventListener("keydown", function(ev: KeyboardEvent): void {
    //ev.preventDefault();
    if (ev.key === "Enter" && inputTask.value.trim() !== "") {
        const taskCheckbox = document.createElement("input");
        taskCheckbox.id = Math.trunc(Math.random()*10000).toString();
        taskCheckbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.htmlFor = taskCheckbox.id;
        taskLabel.textContent = inputTask.value;
        const removeTask = document.createElement("button");
        removeTask.id = "rem-t-" + taskCheckbox.id;
        removeTask.textContent = "➖";
        const taskDiv = document.createElement("div");
        taskDiv.id = "task-" + taskCheckbox.id;
        taskDiv.append(taskCheckbox, taskLabel, removeTask);
        taskList.appendChild(taskDiv);
        removeTask.addEventListener("click", (e: MouseEvent) => {
            e.stopPropagation(); // prevent event from bubbling up
            //(((e.target as HTMLButtonElement).parentElement as HTMLDivElement).parentElement as HTMLDivElement).removeChild((e.target as HTMLButtonElement).parentElement as HTMLDivElement);
            //document.getElementById(removeTask.id)?.parentElement?.parentElement?.removeChild(taskDiv);
            (e.currentTarget as HTMLButtonElement).parentElement?.parentElement?.removeChild(((e.currentTarget as HTMLButtonElement).parentElement as HTMLDivElement))
        })
        inputTask.value = "";
    }
})
