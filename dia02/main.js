var i = 0;
var txt = "Hello, World!";
var speed = 80;
var delayInMilliseconds = 2000; 
// segundos delay


setTimeout( function() {

	for (let index = 0; index < txt.length; index++) {
		
		function type() {
			document.getElementById("type").innerHTML+=txt.charAt(i);
			i++;
			setTimeout(type,speed);
		}
	}

	type();

} , delayInMilliseconds);
