//console.log(document.getElementById("title"));

/*function hello(){
	console.log(document.getElementById("name").value);
}*/

function hello(){
	//console.log(this);
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	// document
	// .getElementById("content")
	// .textContent = message;

    document.getElementById("content").innerHTML = message;

    if(name == "student"){
    	var title = document.querySelector("h1").textContent;
    	title += " & Lovin' it";
    	document.querySelector("h1").textContent = title;
    }
}

//document.querySelector("button").addEventListener("click",hello);
 
 document.querySelector("button").onClick = hello;