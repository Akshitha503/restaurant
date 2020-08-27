function logIn(){
	var name = document.getElementById("name").value;
	var msg = "<h3>Hello " + name + "!</h3>";
	 document.getElementById("content1").innerHTML = msg;
}

 //document.querySelector("button").onClick = logIn;