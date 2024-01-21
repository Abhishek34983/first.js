function patternPrintingI(n) {    
    let str = '';
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            str +='*';
        }
    }
    return str;
}

console.log(patternPrintingI(4));