const container = document.querySelector(".container")

for (let i = 0; i <16; i++) {
    const blokas = document.createElement("div");
    container.appendChild(blokas);
    blokas.innerHTML = "<h1>"+i+"</h1>";
}




    let divs = document.querySelectorAll("div");



    function sugeneruok() {

    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function (event) {
            event.target.style.backgroundColor = sugeneruok()
            console.log()

        }
    }
