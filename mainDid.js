const addTask = document.querySelector(".addTask");
const createTask = document.querySelector(".createTask");
const container = document.querySelector(".container");
const checkBoxOk = "<i class=\"far fa-check-square\"></i>";
const checkBoxEmpty = "<i class=\"far fa-square\"></i>";
const subject = document.querySelector("input:first-child");
const priority = document.querySelector("select");
const dueDate = document.querySelector(".date input");
const lastTouch = Date(document.lastModified);
const vFlag = "<i class=\"fas fa-check\"></i>"
const highColor = "#ff0900";

addTask.addEventListener("click", show);
createTask.addEventListener("click", createNewTask);


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
    newCol.className = "col-1 divCheck";
    newCol.innerHTML = checkBoxEmpty;
    let newCol2 = document.createElement("div");
    newRow.appendChild(newCol2);
    newCol2.className = "col-2 divSubject";
    newCol2.innerHTML = vFlag + subject.value;
    let newCol3 = document.createElement("div");
    newRow.appendChild(newCol3);
    newCol3.className = "col-1 divPriority";
    newCol3.innerHTML = priority.value;
    changeprioritycolor();
    let newCol4 = document.createElement("div");
    newRow.appendChild(newCol4);
    newCol4.className = "col-2 divDate";
    newCol4.innerHTML = dueDate.value;
    let newCol5 = document.createElement("div");
    newRow.appendChild(newCol5);
    newCol5.className = "col-1 divStatus";
    newCol5.innerHTML = "<p>New</p>";
    let newCol6 = document.createElement("div");
    newRow.appendChild(newCol6);
    newCol6.className = "col-2 divProgress";
    newCol6.innerHTML = "<div class=\"progress\">\n" +
        "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n" +
        "</div>";
    let newCol7 = document.createElement("div");
    newRow.appendChild(newCol7);
    newCol7.className = "col-2 divLastTouch";
    newCol7.innerHTML = lastTouch;
    let newCol8 = document.createElement("div");
    newRow.appendChild(newCol8);
    newCol8.className = "col-1 ";
    newCol8.innerHTML = "<button id='remove' class='removeButton'>Šalinti</button>";
    hide();
    const removeButons = document.querySelectorAll(".removeButton");
    for (let i = 0; i < removeButons.length; i++) {
        removeButons[i].addEventListener('click', function (e) {
            let target = e.target;
            let tableRow = target.parentElement.parentElement;
            tableRow.remove();
        })
    }

    function changeprioritycolor() {
        const prioritycolor = document.querySelectorAll(".divPriority");
         for (let i = 0; i < prioritycolor.length; i++) {
                 if (prioritycolor[i] === "High") {
                        prioritycolor[i].style.backgroundColor = highColor;
                // }
            }
        }

    }
}





