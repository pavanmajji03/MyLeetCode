/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let cat = '';
    if (word.length === 1) {
        return true;
    }
    if ( word[0].charCodeAt() >= 97) {
        cat = 'lower';
    } else if ( word[0].charCodeAt() <= 90 && word[1].charCodeAt() >= 97 ) {
        cat = 'camel'; 
    } else if ( word[0].charCodeAt() <= 90 && word[1].charCodeAt() <= 90 ) {
         cat = 'upper';      
    }
    return calAns(cat,word);
};

var calAns = function(type,word) {
    if ( type === 'lower' || type === 'camel'  ) {
        for(let i=1;i<word.length;i++) {
            if(word[i].charCodeAt() <= 90 || word[word.length - i - 1] <= 90) {
                return false;
            }
        }
        return true;
    } else if ( type === 'upper' ) {
        for(let i=0;i<word.length;i++) {
            if(word[i].charCodeAt() >= 97 || word[word.length - i - 1] >= 97) {
                return false;
            }
        }
        return true;
    }
}
