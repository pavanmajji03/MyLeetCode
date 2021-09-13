/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
 var shiftingLetters = function(s, shifts) {
    let rot_map ={
      '0': 'a',
      '1': 'b',
      '2': 'c',
      '3': 'd',
      '4': 'e',
      '5': 'f',
      '6': 'g',
      '7': 'h',
      '8': 'i',
      '9': 'j',
      '10': 'k',
      '11': 'l',
      '12': 'm',
      '13': 'n',
      '14': 'o',
      '15': 'p',
      '16': 'q',
      '17': 'r',
      '18': 's',
      '19': 't',
      '20': 'u',
      '21': 'v',
      '22': 'w',
      '23': 'x',
      '24': 'y',
      '25': 'z'
    }
    let sum_cmve = 0, shifts_cpy = [], ans_str = '';
    for(let i=0;i<shifts.length;i++){
        sum_cmve += shifts[i];
    }
    shifts_cpy[0] = (sum_cmve + (s.charCodeAt(0) - 97)) % 26;
    for(let i=1;i<shifts.length;i++){
        sum_cmve -= shifts[i-1];
        // console.log(s.charCodeAt(i) - 97);
        shifts_cpy.push((sum_cmve + (s.charCodeAt(i) - 97))%26);
    }
    // console.log(shifts_cpy);
    for (let i=0;i<s.length;i++) {
        ans_str += rot_map[shifts_cpy[i]];
    }
    // console.log(ans_str);
    return ans_str;
};