
let name = "Tai";

console.log(checkEligibility(name));

function checkEligibility(name){
    let capitalletter = name.toUpperCase();
    let result = capitalletter.charAt(0);
    if (result=="T"){
        return "Eligible";
    }
    else{
        return "Not Eligible";
    }
}