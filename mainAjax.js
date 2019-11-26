const button  = document.querySelector("button")



// button.addEventListener("click");


    let manoAjax = new XMLHttpRequest();
    manoAjax.onreadystatechange =function () {
        if (manoAjax.readyState === 4){
            if (manoAjax.status === 200){
                document.querySelector("ul").innerHTML = manoAjax.responseText;
            } else {
                alert(manoAjax.statusText);
            }
        }
};
    manoAjax.open("GET", "indexAjax2.html");
    document.querySelector("button").onclick = function () {
        manoAjax.send();
        document.querySelector("button.showmenu").style.display="none";
    };