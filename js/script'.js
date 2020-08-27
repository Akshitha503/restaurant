(function(window){
var names = ["Maartha","Jonas","Hannah","Micheal","Regina","Jonathan","Bartosz","Charlotte","James","Elizabeth"];
for(var i=0; i<names.length; i++){
	var sl = names[i].charAt(0);
	if(sl=='j'||sl=='J'){
		byeWord.bye(names[i]);
	}
	else{
		helloWord.hello(names[i]);
	}
 }
})(window);