let arr = ['Ramesh','Singh'];
let obj = {name: 'Ramesh', age: 23};
const {name, age} = obj;
const [firstName, lastName] = arr;
if(Array.isArray(obj)) {
	console.log('Hello World!');
} else {
	console.log(name + ' ' + firstName);
}
console.log((303.3 * 3) === 909.9);
let scale = 0;
let a = 1;
console.log(a/scale);
a = -1; 
console.log(a/scale);
a = 0;
console.log(a/scale);
a = -0;
scale = 1;
console.log(a/scale);

