// const raudonas =
//     const zalias =
const mokiniai = document.querySelector("ul")


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var duomenys = JSON.parse(xhr.responseText);
    }
    for (rows of duomenys) {
        for (info in rows) {
                mokiniai.textContent = info
                }
                // if (info == "lokacija"){
                // if (rows[info] == true){
                //     mokiniai.innerHTML =
                //     }
                //  }

        }
    }


xhr.open('GET', 'duomenys.json');

xhr.send();