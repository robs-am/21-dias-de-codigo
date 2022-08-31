var i = 0;
var txt = " Hello, World!";
var speed = 150;

function type() {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++
    setTimeout(type, speed);
}
type();
