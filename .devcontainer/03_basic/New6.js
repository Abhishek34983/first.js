function generateCombinations(arr1, arr2) {
    let aaj= []
    aaj.push(arr1,arr2);    
    let ka =0;
    for (let i=0;i<aaj.length;i++){
    for (let j=0;j<aaj[i];j++){
     ka =  aaj[j];
    }}
    return ka;
  }

  let arr1 = ['a', 'c', 'e'];
  let arr2 = ['b', 'd', 'f'];

  console.log(generateCombinations(arr1,arr2));