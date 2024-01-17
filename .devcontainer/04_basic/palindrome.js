function stringPalindrome(str) {
    const arr = Array.from(str);
    arr.reverse();
    let new_arr = arr.join('')
    if(new_arr == str){
        return true;
    }    
    else{
        return false;
    }
}

str = 'madam';
console.log(stringPalindrome(str));