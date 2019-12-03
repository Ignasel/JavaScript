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
const lowColor = "#80ff6f";
const progBar25 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">25%</div>"
const progBar50 = "<div class=\"progress\">\n" +
    "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">50%</div>\n" +
    "</div>";
const progBar75 = "<div class=\"progress\">\n" +
    "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\n" +
    "</div>";
const progBar100 = "<div class=\"progress\">\n" +
    "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">100%</div>\n" +
    "</div>";

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
    taskDone()

    let newCol2 = document.createElement("div");
    newRow.appendChild(newCol2);
    newCol2.className = "col-2 divSubject";
    newCol2.innerHTML = vFlag + subject.value;
    CrossSubject()

    let newCol3 = document.createElement("div");
    newRow.appendChild(newCol3);
    newCol3.className = "col-1 divPriority";
    newCol3.innerHTML = priority.value;
    if (priority.value === "High") {
        newCol3.style.backgroundColor = highColor
    } else if (priority.value === "Low") {
        newCol3.style.backgroundColor = lowColor
    }
    newCol3.innerHTML = priority.value;

    let newCol4 = document.createElement("div");
    newRow.appendChild(newCol4);
    newCol4.className = "col-2 divDate";
    newCol4.innerHTML = dueDate.value;

    let newCol5 = document.createElement("div");
    newRow.appendChild(newCol5);
    newCol5.className = "col-1 divStatus";
    newCol5.innerHTML = "<p>New</p>";

    const newCol6 = document.createElement("div");
    newRow.appendChild(newCol6);
    newCol6.className = "col-2 divProgress";
    newCol6.innerHTML = "<div class=\"progress\">\n" +
        "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n" +
        "</div>";
    changeProgress();
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


    function taskDone() {
        const checkBox = document.querySelectorAll(".divCheck")
        for (let i = 0; i < checkBox.length; i++) {
            checkBox[i].addEventListener('click', function (e) {
                checkBox[i].innerHTML = checkBoxOk;
            })
        }
    }
            function changeProgress() {
                const progressBarDiv = document.querySelectorAll(".progress-bar")
                const progressBar = document.querySelectorAll(".progress")
                for (let i = 0; i < progressBar.length; i++) {
                    progressBarDiv[i].addEventListener('click', function (e) {
                        let target = e.target;
                        console.log(progressBar[i])
                        target.remove();
                        progressBar[i].innerHTML = progBar25



                    })

                }
            }

        function CrossSubject() {
        const subjectText = document.querySelectorAll(".divSubject")
            for (let i = 0; i < subjectText.length; i++) {
        if (taskDone()) {
            subjectText.style.color = "green"
            subjectText.style.textDecoration = "line-through"
            console.log(subjectText)
        }
        }
        }

//     function changeProgress() {
//         const progressDiv = document.querySelectorAll(".divProgress")
//         for (let i = 0; i < progressDiv.length; i++) {
//             progressDiv[i].addEventListener('click', function (e) {
//                 let target = e.target;
//                 target.remove();
//                 newRow.appendChild(newCol6);
//                 newCol6.className = "col-2 divProgress";
//                 newCol6.innerHTML = progBar25
//             })
//
//         }
// }

        }




