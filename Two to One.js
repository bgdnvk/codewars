//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
/**
 * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

    each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */
function longest(s1, s2) {
  // your code
  const arr = [...s1].concat([...s2]);
  let sorted = arr.sort(sortThings);
  
  let uniqArr = [];
  for(let i = 0; i<=sorted.length;i++){
    
    if(sorted[i] !== sorted[i+1]){
      uniqArr.push(sorted[i]);
    }
  }

  return uniqArr.toString().split(",").join("");
}

function sortThings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a > b ? 1 : b > a ? -1 : 0;
}

  longest("loopingisfunbutdangerous", "lessdangerousthancoding");
  //const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')