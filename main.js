function countVowels(str){
    const vowels = 'aeiou'
    let length = 0
    for (let letter of str) {
        if (vowels.includes(letter)){
            length ++
        }
    }
    return length
} 
console.log(countVowels("Hello"))

module.exports = {countVowels}