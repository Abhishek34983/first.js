/*let arr = [10, null, 20, undefined, 30];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        sum += arr[i];
    }
}
console.log(sum);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);*/

let str = "apple,banana,cherry";
let word = str.split(",");
console.log(word);
let result = word.join(';');
console.log(result);

const objectArray = [{ x: 1 }, { y: 2 }, { z: 3 }];
const [{ x }, , { z }] = objectArray;
console.log(x, z);

console.log(typeof NaN);