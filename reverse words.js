//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
    return str.split(" ").map(e => {
        return e.split("").reverse().join("");
    }).join(" ");
  }

  console.log( reverseWords('a b c d'));
 
  console.log( 
  reverseWords('double  spaced  words')
  );
  