function mostFrequent(text) {
    const arra = text.split('');
    const map1 = new Map();
 for(let i=0;i<arra.length;i++){
     const a = arra[i];
     if (map1.has(a)){
         const prevCount = map1.get(a);
         map1.set(a, prevCount +1);
     }
     else{
         map1.set(a,1);
     }
 }
 console.log(map1);
    let p = Math.max(...map1.values());
    let num = [...map1].find(([key, value]) => p === value)[0];
    if (map1.get(num)==map1.get(A)){
        return A+''+map1.get(A);
    }
    return num +' '+p;
    };

let arr = 'aaaAAA';

console.log(mostFrequent(arr));