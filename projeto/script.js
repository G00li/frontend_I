import TodoModel from "./TodoModel.js";

window.onload = async () => {

    let currentTaskIndex; 

    const model = new TodoModel();

    const listsContainer = document.querySelector("#lists-container"); 
    const todoHeader = document.querySelector("todo-header");


    todoHeader.addEventListener("clicked", () =>{
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks"; 
    });



    const buildTasksList = (tasks) => {
        const taskList = document.querySelector("#tasks");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            const taskItem = new TaskItem();

            taskItem.addEventListener("clicked", () => {
    
                console.log("Clicked")
    
                listsContainer.style.transform = "translateX(-100%)";
                todoHeader.state = "items";
                todoHeader.taskName = task.title;

                buildItemsList(task.items);
                currentTaskIndex=index; 
    
            });
            taskItem.addEventListener("delete", () => {
                model.deleteTask(index);
                buildTasksList(model.getTasks());
            });

            taskItem.title = task.title;

            taskList.append(li);
            li.append(taskItem);
        });
    };



    
    const buildItemsList = (items) =>{

        const checkItemList =document.querySelector("#items"); 
        checkItemList.innerHTML = ""; 

        items.forEach((item, index) => {
            const li = document.createElement("li");
            const checkItem = new CheckItem();

            checkItem.addEventListener("checked", (ev) =>{
                console.log(ev.detail.checked); 
            }); 

            checkItem.addEventListener("delete", () => {
                model.deleteITem(currentTaskIndex, index);
                buildItemsList(model.getItems(currentTaskIndex));
                console.log("Delete check item"); 
            })

            checkItem.title =item.title; 
            checkItem.checked = item.checkItem;

            li.append(checkItem);
            checkItemList.append(li);

        }
    );




    }

    buildTasksList(model.getTasks()); 


}