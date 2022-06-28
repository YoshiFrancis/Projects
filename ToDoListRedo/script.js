let addTask = document.querySelector("#addTaskBtn")
let sortSwitch = true;
let box = document.querySelector("#tab-bar-box");
let tabBar = document.querySelector("#tab-bar");


window.addEventListener('load', () => {
    let container = document.getElementById("form-container");
    container.style.display = "none";
    //does not work -- i did get the HTML though
    //document.body.innerHTML = ""
    //document.body += (localStorage.getItem("theList"))
    //console.log(document.body)
})
/*
let saveBtn = document.querySelector("#saveBtn")
saveBtn.addEventListener("click", () => {
    let body = document.body
    localStorage.setItem("theList", body.innerHTML);
    console.log(localStorage.getItem("theList"))
})
*/
box.addEventListener("mouseover", () => {    
    tabBar.style.display = "block"
})

box.addEventListener("mouseout", () => {
    
    tabBar.style.display = "none"
    

})

addTask.addEventListener("click", () => {
    let container = document.getElementById("form-container"); 
    if (container.style.display == '') {
        container.style.display = "none"
    } else {
        container.style.display = ''
    }
})

let prioAscBtn = document.querySelector("#sortByPrioAsc")
prioAscBtn.addEventListener("click", () => {
    sortByPrioAsc(document.getElementById("task-container"))
})

let prioDescBtn = document.querySelector("#sortByPrioDesc")
prioDescBtn.addEventListener("click", () => {
    sortByPrioDesc(document.getElementById("task-container"))
})

let dateEarlyBtn = document.querySelector("#sortByEarlyDate")
dateEarlyBtn.addEventListener("click", () => {
    sortByEarlyDate(document.getElementById("task-container"))
})

let dateLaterBtn = document.querySelector("#sortByLateDate")
dateLaterBtn.addEventListener("click", () => {
    sortByLaterDate(document.getElementById("task-container"))
})
// add task 

document.addEventListener("submit", event => {
    event.preventDefault();
    let container = document.getElementById("task-container");
    let taskContainer = document.createElement("div")
    taskContainer.className = "tasks"
    let form = document.getElementById("taskForm");
    let task = form.elements.task;
    let date = form.elements.date;
    let priority = form.elements.priority;
    
    let taskElement = document.createElement("h2");
    taskElement.textContent = task.value;
    let dateElement = document.createElement("p")
    dateElement.textContent = date.value;
    let priorityElement = document.createElement("p");
    priorityElement.textContent = priority.value;

    let editAndDelete = document.createElement("div");
    editAndDelete.className ="editAndDelete";
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit"
    editBtn.className = "btn btn-warning"
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger"


    editAndDelete.append(editBtn)
    editAndDelete.append(deleteBtn)

    let confirmBtn = document.createElement("button")
    confirmBtn.innerText = "Confirm";
    confirmBtn.className = "btn btn-success"


    task.value = ''
    date.value = ''
    priority.value = ''

    container.append(taskContainer)
    taskContainer.append(taskElement)
    taskContainer.append(dateElement)
    taskContainer.append(priorityElement)
    taskContainer.append(editAndDelete)




    // default sort by priority
    
    if (sortSwitch) {
        sortByPrioAsc(container)
    } else {
        sortByPrioDesc(container)
    }


    deleteBtn.addEventListener("click", () => {
        let ultimateContainer = deleteBtn.parentElement.parentElement.parentElement
        ultimateContainer.removeChild(deleteBtn.parentElement.parentElement)
    })


    editBtn.addEventListener("click", () => {
        
        priorityElement.setAttribute("contenteditable", "true")
        taskElement.setAttribute("contenteditable", "true")
        dateElement.setAttribute("contenteditable", "true")

        
        editAndDelete.replaceChild(confirmBtn, editBtn)

    })

    confirmBtn.addEventListener("click", () => {

        priorityElement.setAttribute("contenteditable", "false")
        taskElement.setAttribute("contenteditable", "false")
        dateElement.setAttribute("contenteditable", "false")

        editAndDelete.replaceChild(editBtn, confirmBtn)
    })

    
})



// SORTS IN ORDER OF PRIORITY
function sortByPrioAsc(container) {
    sortSwitch = true;
    let array = Array.from(container.children)
    array.sort((a, b) => a.lastChild.previousElementSibling.textContent - b.lastChild.previousElementSibling.textContent)
    // in order to get clean slate of container
    for (element of container.children) container.removeChild(element)
    // append newly sorted array
    for (let i = 0; i < array.length; i++){
        container.append(array[i])
    }
}

function sortByPrioDesc(container) {
    sortSwitch = false;
    let array = Array.from(container.children)
    array.sort((a, b) => b.lastChild.previousElementSibling.textContent - a.lastChild.previousElementSibling.textContent)
    // in order to get clean slate of container
    for (element of container.children) container.removeChild(element)
    // append newly sorted array
    for (let i = 0; i < array.length; i++){
        container.append(array[i])
    }
}

function sortByEarlyDate(container) {
    let array = Array.from(container.children)

    array.sort((a, b) => new Date(a.children[1].textContent).getTime()  - new Date(b.children[1].textContent).getTime())
    // in order to get clean slate of container
    for (element of container.children) container.removeChild(element)
    // append newly sorted array
    for (let i = 0; i < array.length; i++){
        container.append(array[i])
    }
}

function sortByLaterDate(container) {
    let array = Array.from(container.children)
    
    array.sort((a, b) => new Date(b.children[1].textContent).getTime()  - new Date(a.children[1].textContent).getTime())
    // in order to get clean slate of container
    for (element of container.children) container.removeChild(element)
    // append newly sorted array
    for (let i = 0; i < array.length; i++){
        container.append(array[i])
    }
}

// TO DO
// sort by date --- DONE
// delete button --- DONE
// edit button ---  DONE
// save to cookies
// design page

