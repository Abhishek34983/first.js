function naturalSum(n) {
    let result = 0;
    for (let i=1;i<=n;i = i+1){
         result = result+i;
    }
    return result;
}

console.log(naturalSum(10));