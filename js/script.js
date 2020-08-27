// var x;
// console.log(x);

/*if (x==undefined) {
	console.log("x is undefined");
}

x=5;
if (x==undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined");
}
*/

// var string = "Hi";
// string += " Neha";
// console.log(string+" !");

// console.log((9+3)/4);
// function test (a) {
// 	console.log(a/4);
// }
// test();

var x="4", y=4;
// if (x==y) {  /*** type coercion ***/
// 	console.log("x is equal to y");
// }

/*** strict equality ***/
/*if (x===y) {
	console.log("x is equal to y");
}
else {
	console.log("x is not equal to y")
}
*/
 

/*** BOOLEAN ***/
/*if (false || "" || null || undefined || 0 || NaN) {
	console.log("This line will never be executed");
}
else {
	console.log("All false");
}

if(true && "Hello" && 1 && -1 && "false" ) {
	console.log("All true");
}*/


/***BEST PRACTICE FOR CURLY BRACES**
function a () {
	return;
	{
		name: "Neha"
	};
}

function b () {
	return{
		name: "Neha"
	};
}

console.log(a());
console.log(b()); */

/***FOR LOOP**
var sum=0;
for(var i=0;i<10;i++){
	console.log(i);
	sum=sum+i;
}
console.log("Sum = "+sum); */

/***DEFAULT VALUES**
function chickenWith(sideDish){
	sideDish=sideDish||"whatever";
	console.log("Chicken with "+sideDish);
}
chickenWith("noodles");
chickenWith(); */



/*var x=9;
if(null || console.log("Hello") || x>5){
	console.log("Hello");
}*/


/***CREATING NEW OBJECT***/
/*var company=new Object();
company.name="AA";
company.year=1966;
company.ceo=new Object();
company.ceo.name="Neha Rao";
company.ceo.age=30;
console.log(company);
console.log("Company CEO's name is: "+company.ceo.name);
 
console.log(company["year"]);

//company.$stock=110;
//console.log(company);

//company.$stock of company=110; //invalid

company["stock of company"]=110;
console.log(company);
console.log("Stock price is: "+company["stock of company"]);

var stockProp = "stock of company";
company[stockProp]= 230;
console.log(company[stockProp]);*/


/***OBJECT LITERAL***/
/*var fb = {
  name: "FB",
  ceo: {
		Name: "Mark",
		age: 39
	   },
   year: 1999,
   "stock of company": 110
};


console.log(fb["stock of company"]);*/


/***FUNCTIONS***/
// function multiply(x,y) {
// 	return x*y;
// }
// console.log(multiply(5,3));
// multiply.version="v.1.0.0";
// console.log(multiply.version);

// //function factory
// function multiplier(multiplier){
// 	var myFunc = function(x){
// 		return multiplier*x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = multiplier(3);
// console.log(multiplyBy3(10));
// var double = multiplier(2);
// console.log(double(10));

// //passing functions as arguments
// function doOperation(x,operation) {
// 	return operation(x);
// }

// var result = doOperation(5,multiplyBy3);
// console.log(result);
// var r= doOperation(6,double);
// console.log(r);


/***PASSING VARIABLES BY VALUE***/
// var a = 7;
// var b = a;
// console.log("a ="+a);
// console.log("b ="+b);

// b = 5;
// console.log("After update");
// console.log("a ="+a);
// console.log("b ="+b);

/***PASSING VARIABLES BY REFERENCE***/
// var a = { x:7 };
// var b = a;
// console.log("Before update")
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("After update");
// console.log(a);
// console.log(b);

/**Pass by value**/
/*function change(prim) {
	console.log("Before");
	console.log(prim);

	prim =5;
	console.log("After");
	console.log(prim);
}

var value=7;
change(value);
console.log("change function after calling, original value");
console.log(value);*/

/**Pass by reference**/
/*function obj(prim) {
	console.log("Before");
	console.log(prim);

	prim.x=5;
	console.log("After:");
	console.log(prim);
}

var value= {x:7};
obj(value);
console.log("After invoking function:");
console.log(value);*/

/***"this" word***/
/*function test(){
	console.log(this);
}
test();*/

/*function Circle(radius) {
	this.radius=radius;
	this.area=
	   function(){
	   	return Math.PI * Math.pow(this.radius,2);
	   };
}
var myCircle = new Circle(10);
console.log(myCircle.area());*/


/*function Circle(radius){
	this.radius=radius;
}
Circle.prototype.area = 
    function (){
    	return Math.PI*Math.pow(this.radius,2);
    }

  var myCircle=new Circle(10);
  console.log(myCircle.area());*/

  /***OBJECT LITERALS AND 'THIS'***/
/*  var literal={
  	radius:10,
  	area: function(){
  	   self=this;
  	var increaseRadius= function(){
  		//this.radius=20 //using self refers to this radius
  		self.radius=20;
  	}
  	increaseRadius();
  	console.log(this.radius);

  return Math.PI*Math.pow(this.radius,2);
   }
};
  console.log(literal.area());*/


  /***ARRAYS***/
/*  var array = new Array();
  array[0]=503;
  array[1]="Akshitha";
  array[2]=function(n){
  	console.log("Hello "+n);
  };
  array[3]={course:"HTML,CSS & JS",
Tutor:"Yaakov"};

console.log(array);
array[2](array[1]);
console.log(array[3].Tutor);*/

/***Short hand array creation***/
/*var names=["Aa","Bb","Cc"];
// console.log(names);
for(var i=0; i<names.length; i++){
	console.log("Hello "+names[i]);
}
names[100]="Zz";
for(i=0;i<names.length;i++){
	console.log("Hello "+names[i]);
}*/


// var names1=["Aa","Bb","Cc"];
// var obj={
// 	name: "Yaakov",
// 	course: "HTML,CSS&JS"
// };
// // for(var prop in obj){
// // 	console.log(prop+": "+obj[prop]);
// // }
// obj.year=2013;
// for(var prop in obj){
// 	console.log(prop+": "+obj[prop]);
// }

/***CLOSURES***/
/*function makeMultiplier(multiplier){
	function b(){
		console.log("Multiplier is:"+multiplier);
	}
	b();
	return (
		function(x){
			return multiplier*x;
		  }
	);
}

var double = makeMultiplier(2);
console.log(double(10));*/

/***FAKE NAMESPACES***/
// var name="Jonas";
// function hello(){
// 	console.log("Hello "+name);
// }

var jonasName = {};
jonasName.name="Jonas";
jonasName.hello= function(){
	console.log("Hello "+jonasName.name);
}