function countVowels(word) {
    const arr = Array.from(word);
    let vowels = 'aAeEiIoOuU';
    let result= 0;
    for(let i=0;i<arr.length;i++){
        if(vowels.indexOf(arr[i])!==-1){
            result += 1;
        }
    }
    return result;
  }

  let word ='language';
  console.log(countVowels(word));