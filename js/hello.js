(function(window){
var helloWord = {};
var word = "Hello";
helloWord.hello = function(name) {
	console.log(word+" "+name);
 }
 window.helloWord = helloWord;
})(window);