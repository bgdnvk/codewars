//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
/**
 * You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
 */
function decipherThis(str) {
    return str.split(" ").map(e => {
      let num2letter = String.fromCharCode(e.match(/[0-9]/g).join(""))
      let letter = e.match(/[a-z,A-Z]/g);
      if (letter != null  && letter.length >= 2  ){
        let temp = letter[0];
        letter[0] = letter[letter.length-1];
        letter[letter.length-1] = temp;
      }
      if(!letter){
        return num2letter;
      }
      letter = letter.join("");
      return `${num2letter}${letter}`;
    }).join(" ")
  }; 

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace