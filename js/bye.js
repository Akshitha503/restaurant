(function(window){
var byeWord = {};
var word = "Good bye";
byeWord.bye = function(name) {
	console.log(word+" "+name);
 }
 window.byeWord = byeWord;
})(window);