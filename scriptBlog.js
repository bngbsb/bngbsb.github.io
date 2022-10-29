alert("stylesheet 1: "+document.getElementById("styleSheet_1").href);
alert("stylesheet 2: "+document.getElementById("main").style);

function abreOverlay () {
    alert("function abre overlay");
    alert(document.getElementById("navOverlay_index").style.display); 
    document.getElementById("navOverlay_index").style.display = "block";
    alert(document.getElementById("navOverlay_index").style.display);
    alert("acabou");
}

function fechaOverlay () {
    alert("funcao fecha overlay");
    document.getElementById("navOverlay_index").style.display = "none";
}
