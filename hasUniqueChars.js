// Write your code below
const uniqueChars = str => { 
    let chars = [];
    for (let i = 0; i < str.length; i++) {
        if (chars.includes(str[i]) === false) {
            chars.push(str[i])
        }
    }
    if (chars.length === str.length) {
        return true;
    }   else return false;
}

console.log(uniqueChars('supercalifragilistic'));