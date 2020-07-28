var popup = document.querySelector(".popup");
var btn = document.querySelector("button");
var x = document.querySelector(".X");
var section = document.querySelector("section");

btn.addEventListener("click",appear);

function appear(){
    popup.style.display="block";
    section.style.filter = "blur(3.5px)";
}

x.addEventListener("click",disappearx);

function disappearx(){
    popup.style.display = "none";
    section.style.filter = "blur(0px)"
}

popup.addEventListener("click",disappearpopup);

function disappearpopup(e){
        if(e.target.className == "popup"){
        popup.style.display = "none";
        section.style.filter = "blur(0px)"

    }
}