/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let vo = ['a','A','e','E','i','I','o','O','u','U'];
    let str = Array.from(s);
    let i = 0, j = str.length - 1;
    while( i<j ) {
        let ith_vowel = vo.indexOf(str[i]);
        let jth_vowel = vo.indexOf(str[j]);
        if ( ith_vowel > -1 && jth_vowel > -1 ) {
            swapIthVowelToJthVowel(str,i,j);   
            i++;
            j--;
        }
        if ( ith_vowel === -1 ) {
            i++;
        }
        if ( jth_vowel === -1 ) {
            j--;
        }
    }
    return str.join('');
};

var swapIthVowelToJthVowel = function(s,i,j) {
    let k = s[i];
    s[i] = s[j];
    s[j] = k;
}