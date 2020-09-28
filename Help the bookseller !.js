//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
/**
 * 
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
 */
function stockList(listOfArt, listOfCat){
  
  let tempArr = [],
      checkEmpty = 0;

  for(const letter of listOfCat){
    let t = 0;
    for(const article of listOfArt){
      if (letter === article[0]){
        t += parseInt(article.slice(article.indexOf(" ")+1, article.length));
      }
    }
        console.log("T is "+t);
        console.log("tempArr is "+tempArr)
    
        tempArr.push(`(${letter} : ${t})`);
        checkEmpty += t;
  }
      if(!checkEmpty){
        return "";
      }
      console.log(tempArr)
      return tempArr.join(" - ")
}
//   console.log(listOfArt[0].match("z"))
  
//   function matchLetter(letter){
//     let nums = 0;
//     let tempArr = [];
//     for(let i = 0; i <listOfArt.length; i++){
//         console.log("nums is "+nums)
      
//       if(listOfArt[i].match(letter)){
// //         let letterAt = listOfArt[i].match(letter).index;
//         let spaceAt = listOfArt[i].indexOf(" ");
//         console.log("space at "+spaceAt)
//         nums = nums + parseInt( listOfArt[i].slice(spaceAt+1, listOfArt[i].length));
//         console.log(listOfArt[i].slice(spaceAt+1, listOfArt[i].length))
//         console.log("nums is "+nums)
//         tempArr.push(letter, nums);
//       }
//         console.log("nums is "+nums)
      
//       nums = 0;
//     }
//     console.log(tempArr)
//   }
  
//   let resArr = [];
//   let sum = 0;
  
//   for(const word of listOfCat){
//     console.log(word);
//     if(matchLetter(word)){
//       sum+=matchLetter(word);
//     }
//     console.log("sum is "+sum+" letter is "+word);
//     sum = 0;
//   }
  
//   matchLetter("A")