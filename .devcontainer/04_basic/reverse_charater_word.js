function reverseCharacters(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

let str = 'abc def ghi';

console.log(reverseCharacters(str));