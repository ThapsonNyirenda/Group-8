function display(){
    document.getElementById("sidebar").style.display="block";
}

function hide(){
    document.getElementById("sidebar").style.display="none";
}

function view(){
    var drop= document.getElementById('drop');
    drop.style.display='inline-block';
}

function view() {
    var x = document.getElementById("drop");
    if (x.style.display !="block") {
        x.style.display ="block";
    } else if (x.style.display =="block") {
    	x.style.display = "none";
    }

}