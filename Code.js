let listContainer, taskInput;
let num = 0;
document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.querySelector("#taskButton");
    addButton.addEventListener("click", addTask);
    listContainer = document.querySelector(".listContainer");
    taskInput = document.querySelector("#taskInput");
    taskInput.addEventListener("input", () => {

        if (taskInput.value.length > 50) {

            alert("You cant have more than 50 character ");
            let s = taskInput.value.slice(0, 21);
            taskInput.value = s;
        }
    });
});



function addTask() {
    if (taskInput.value == "") {
        alert("you must type something ");
    } else {
        num++;
        let CurrTask = document.createElement("li");
        CurrTask.classList.add("flex","justify-between","p-2", "rounded-lg", "border", "mt-1", "hover:border-blue-400", "text-xl", "font-serif", "text-amber-500", "cursor-pointer");
        CurrTask.id = `task${num}`;
        CurrTask.addEventListener('click', completedTask);
        CurrTask.textContent = taskInput.value;
        //adding dustbin
        let myImage = document.createElement("img");
        myImage.src = "src/image/dustbin.png";
        myImage.classList.add("h-5","w-6");
        myImage.addEventListener("click",()=>{
            CurrTask.remove();
        })
        CurrTask.appendChild(myImage);

        listContainer.append(CurrTask);


        taskInput.value = "";

    }
}

function completedTask(event) {
    const taskId = event.target.id;
    const myTask = document.getElementById(taskId);
    myTask.classList.add("line-through");
}

