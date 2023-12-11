function checkForSubstr(str,str2){
    if (str.indexOf(str2)==str.lastIndexOf(str2)){
        return true;
    }
    else {
        return false;
    }
}

let str = "learn Java and JavaScript";
let str2 = 'java';

console.log(checkForSubstr(str,str2))