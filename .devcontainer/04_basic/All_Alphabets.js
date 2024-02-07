
function allAlphabetsOrNot(str){
let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

    // Convert the string to a Set to remove duplicates
    let strSet = new Set(str);

    // Check if the Set of alphabets is a subset of the Set from the input string
    return [...alphabetSet].every(char => strSet.has(char));
}

let n = 'thequickbrownfoxjumpsovla';
console.log(allAlphabetsOrNot(n));