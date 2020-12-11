/* JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    var list = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 }
    var result = "";
    for(var i in list) {
        while(num >= list[i]) {
            result += i;
            num -= list[i];
        }
    }
    return result;
   }
   
   convertToRoman(36);
   console.log(convertToRoman(36))

