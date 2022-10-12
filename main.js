button.onclick {
    alert("oiiii!")
};

function logoOn () {
    document.getElementById("logoHeader").style.display = "block";
}

function logoOff () {
    document.getElementById("logoHeader").style.display = "none";
} 

function logoNormal {
    document.getElementById("logoHeader").src = "https://docs.google.com/drawings/d/e/2PACX-1vTn25qOiuuqbdBUWLza2e52rBtDFgo5sxqHRSEDwLHOgdIuJce6Kb5beBxvgI1cnhgZc8O9C9DTX0GS/pub?w=602&h=606";
}

function logoSecundaria {
    alert("logo secundaria");
    document.getElementById("logoHeader").src = "https://docs.google.com/drawings/d/e/2PACX-1vTuvbIF4kV_e4xjoxluE-NHLYtG8wq9xkZWW3q74-CI4VUDzcRKscwQpqHpsrtxAjIC_O9LcwsdDQHR/pub?w=602&h=606";

}

function navOn() {
    document.getElementById("nav_index").style.display = "block";
}

function navOff() {
    document.getElementById("nav_index").style.display = "none";
}
