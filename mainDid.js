const addTask = document.querySelector(".addTask");
const createTask = document.querySelector(".createTask");
const container = document.querySelector(".container");
const checkBoxOk = "<i class=\"far fa-check-square\"></i>";
const checkBoxEmpty = "<i class=\"far fa-square\"></i>";
const subject = document.querySelector("input:first-child");
const priority = document.querySelector("select");
const dueDate = document.querySelector(".date input");
const lastTouch = Date(document.lastModified);
const removeTask = document.getElementById("remove")





addTask.addEventListener("click",show);
createTask.addEventListener("click", createNewTask);
// removeTask.addEventListener("click", removeThisTask)

console.log(removeTask)

function show() {
    var x = document.getElementById("forma");
    x.style.display = "block"
}

function hide() {
    var y = document.getElementById("forma");
    y.style.display = "none";

}

function createNewTask() {
    let newRow = document.createElement("div");
    container.appendChild(newRow);
    newRow.className = "row align-items-center";
    let newCol = document.createElement("div");
    newRow.appendChild(newCol);
    newCol.className = "col-1";
    newCol.innerHTML = checkBoxEmpty;
    let newCol2 = document.createElement("div");
    newRow.appendChild(newCol2);
    newCol2.className = "col-2";
    let SubjectOne = subject.value;
    newCol2.innerHTML = subject.value;
    let newCol3 = document.createElement("div");
    newRow.appendChild(newCol3);
    newCol3.className = "col-1"
    newCol3.innerHTML = priority.value;
    let newCol4 = document.createElement("div");
    newRow.appendChild(newCol4);
    newCol4.className = "col-2"
    newCol4.innerHTML = dueDate.value;
    let newCol5 = document.createElement("div");
    newRow.appendChild(newCol5);
    newCol5.className = "col-1"
    newCol5.innerHTML = "<p>New</p>"
    let newCol6 = document.createElement("div");
    newRow.appendChild(newCol6);
    newCol6.className = "col-2"
    newCol6.innerHTML = "<div class=\"progress\">\n" +
        "  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n" +
        "</div>"
    let newCol7 = document.createElement("div");
    newRow.appendChild(newCol7);
    newCol7.className = "col-2"
    newCol7.innerHTML = lastTouch
    let newCol8 = document.createElement("div");
    newRow.appendChild(newCol8);
    newCol8.className = "col-1"
    newCol8.innerHTML = "<button id='remove'>Šalinti</button>"
    hide()
}

function removeThisTask() {


}