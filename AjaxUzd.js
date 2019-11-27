

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let duomenys = JSON.parse(xhr.responseText);
        for (let rows of duomenys) {
            const mokiniai = document.querySelector(".turinys")
            const color = document.createElement("span")
            const mokinys = document.createElement("h5")

            mokinys.textContent = rows.vardas;

            mokinys.classList.add("badge", "badge-pill");
            mokinys.classList.add("badge-success");
            mokinys.textContent = 'Yra';

            if (!mokinys.location) {
                mokinys.classList.remove("badge-success");
                mokinys.classList.add("badge-danger");
                mokinys.textContent = 'Nėra';
            }

            mokiniai.appendChild(color);
            mokiniai.appendChild(mokinys);







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