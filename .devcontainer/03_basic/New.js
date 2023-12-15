const arr = [5, 6, 3, 4];

function all(arr){
let result = arr[0];
for (let i=0; i < arr.length; i++) {
    if (arr[i] < result) {
        result = arr[i];
    }
}
return result;}

console.log(all(arr));