
let num =3

console.log(findFactorial(num));


function findFactorial(num){
    if (num===0 || num ==1){
        return '1';
    }
    else {
        let factorial = 1;
        for (i=1;i<=num;i=i+1){
            factorial = factorial*i;
        }
        return factorial;
    }

}