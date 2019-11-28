

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let duomenys = JSON.parse(xhr.responseText);
        for (let rows of duomenys) {
            const mokiniai = document.querySelector(".turinys")
            const color = document.createElement("span")
            const mokinys = document.createElement("h5")

            mokinys.textContent = rows.vardas;
            console.log(rows.lokacija)

            color.classList.add("badge", "badge-pill");
            color.classList.add("badge-success");
            color.textContent = 'Yra';

            if (!rows.lokacija) {
                color.classList.remove("badge-success");
                color.classList.add("badge-danger");
                color.textContent = 'Nėra';
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