//Let's create an array
var arr = ["value1","value2","value3","valueN"];

//Output the array in the console
console.log(arr);

//Loop through the array using the Array.protype.forEach method
console.log("Loop through the array using the Array.protype.forEach method");
arr.forEach(function(val, ind , myArr){
	// val is the value
	// ind is the index of the value in the array
	// myArr is the array that is being iterated
  console.log(val,ind,myArr);
});

//The simple for Loop
console.log("The simple for loop");
for(var i=0 ; i<arr.length ; i++){
  //access value through index i
  console.log(arr[i]);
}

//We can also optimize this as
console.log("Optimized for loop");
for(var i=0,arrLen=arr.length;i<arrLen;i++){
  //access value through index i
  console.log(arr[i]);
}

//Let's review enumeration and iteration
console.log("Enumeration vs iteration");
//Let's add a method to Array.prototype
Array.prototype.newMethod = function(){
  console.log("New Array Method: Hello World");
}
//Create new array
var newArr = ["val1","val2","val3"];

//Let's loop using for-in
console.log("Let's see how the for-in loop works.");
for(var i in newArr){
  //Also displays newMethod
  console.log(i,newArr[i]);
}


//Let's ensure we are operating on a property
console.log("Iteration fixed!")
for(var i in newArr){
  if(newArr.hasOwnProperty(i)){
    //Should be fine now
    console.log(i,newArr[i]);
  }
}

/* ECMAScript 2015 Support required */

//Let's try the for-of looping method in ECMAScript 2015
console.log('For-of looping method in ECMAScript 2015');

//create new array
const newestArr = ["value","another value","final value"];

//Loop through the array using for-of
for(const s of newestArr){
  //Value accessed through variable s
  console.log(s);
}
