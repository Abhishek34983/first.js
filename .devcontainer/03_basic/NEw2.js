function checkPalindrome (str){
    let str2 = " ";
    str2 = [];
    str2 = str.split('');
    str2 = str2.reverse();
    str2 = str2.join("");
    let result = str == str2 ;
return result;
}
let str = "abcdef";

console.log(checkPalindrome(str));