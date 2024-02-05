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
 //console.log(map1);
    let p = Math.max(...map1.values());
    let num = [...map1].find(([key, value]) => p === value)[0];
    let freq = 0;
    let maxChar = 0;
    for(let [key,value] of map1){
          if(value>freq){
            freq = value;
            maxChar = key;
          }
          else if (value == freq){
            if(key.charCodeAt(0)<maxChar.charCodeAt(0)){
                maxChar = key
                freq = value
                }
            }
          }
          return [maxChar,freq];
    }


let arr = 'aaaAAA';

console.log(mostFrequent(arr));