/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var result = ""; 
     for (var i = 0; i<str.length; i++) {
      if (str[i] == " " || str[i] == "?" || str[i] == "!" || str[i] == ".") {
        result += str[i]
      }
      else if (alpha.indexOf(str[i]) + 13 < 26) {
        result += alpha[alpha.indexOf(str[i])+13]
      } else if (alpha.indexOf(str[i]) + 13 >= 26) {
        result += alpha[13 - (26 - alpha.indexOf(str[i]))]
      } 


      }
      return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  
  