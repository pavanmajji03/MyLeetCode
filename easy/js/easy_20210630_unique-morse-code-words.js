/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseTrans = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let morseWords = {};
    for (let i=0;i<words.length;i++) {
        let str = '';
        for(let j=0;j<words[i].length;j++) {
            // as all letters are lower case
            str+=morseTrans[words[i][j].charCodeAt() - 97];
        }
        morseWords[str] = 1;
    }
    return Object.keys(morseWords).length;
};
