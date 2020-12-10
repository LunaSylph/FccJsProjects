/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
  var a = [];
  var result = [];
  var splitStr = str.toLowerCase().replace(/[^a-z0-9]+/gi, " ").split("");
  for(var i = 0; i<=splitStr.length; i++) {
      if (splitStr[i] !== " ") {
       a.push(splitStr[i])   
      }
      if (splitStr[splitStr.length-i] !== " ")
      result.push(splitStr[splitStr.length-i]);  
  }
  result.shift();
  a.pop();
  if (result.join() === a.join()) {
      return true;
  }else{return false};
  
  //console.log(splitStr)
  console.log(result.join())
  console.log(a.join())
  console.log("sonuc", result.join() === a.join())
  

  
}