function patternPrintingI(n) {    
    let str = [];
    let s = [''];
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            s +='*';
        }
        s +='\n';
    }
    
    return s;
}

console.log(patternPrintingI(4));