var i = 0;
var txt = "Hello, World!";
var speed = 145;


for (let index = 0; index < txt.length; index++) {
	const element = [txt.length].index
	function type() {
	    document.getElementById("type").innerHTML+=txt.charAt(i);
	    i++;
	    setTimeout(type,speed);
	}
}

type();


