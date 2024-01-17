function extractNumbers(N, arr) {
let result = [];
   for(let i=0;i<N;i++){
       if (typeof arr[i] ==='number')
       {
           result.push(arr[i]);
        }
    }
    return result;
}

let arr = ['a',3,'long',17,'crio','dsa',100,20];
console.log(extractNumbers(8,arr));