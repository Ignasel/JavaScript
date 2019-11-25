const rodyti = document.querySelector("#rodyti");
const random = document.querySelector("#maisyti");
const sarasas = document.querySelector("ul");


let gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

rodyti.addEventListener("click", createGallery, displayNone);
random.addEventListener("click", sortGallery);

    function createGallery() {

        for (let i = 0; i < gallery.length; i++) {

            const vieta = document.createElement("li");
            const fotos = document.createElement("img");
            fotos.src="gallery/"+ gallery[i] +".jpg";
            sarasas.appendChild(vieta);
            vieta.appendChild(fotos)
        }
    }

    function displayNone() {
        rodyti.style.display = "none";
    }
    console.log(displayNone)



    function sortGallery() {
        let naujas = gallery;
        naujas.sort(function () {
            return 0.3 - Math.random()
        });
        console.log(naujas);

        const buve = document.querySelectorAll("img");
        for (let i = 0; i < naujas.length; i++) {
            buve[i].src = 'gallery/' + gallery[i] + '.jpg';
        }

        // for (nuorodos in buve) {
        //
        //     nauja[nuorodos].src = gallery[nuorodos]
        //     // for (items of gallery) {
        //     //
        //     nuorodos.src = "gallery/" + items + ".jpg"
        //     console.log(gallery.nuorodos)


        // for (item in nauja){
        // item.src = "gallery/" + item + ".jpg"


        //
        // let nauja = document.querySelector("img")
        // nauja.src = "gallery/" + gallery[x] + ".jpg"
        //
    }