//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
/**
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 */
function order(words){
    // ...
    if(words === ""){
        return "";
    }
    // console.log(words);

    let arrayObjs = [];
    
    
    const splitArr = words.split(" ");
    
    // console.log(splitArr[0][0].toString());

    // console.log(splitArr);
    // console.log(typeof(splitArr));

    for(let i = 0; i<splitArr.length;i++){
        // console.log("inside arr: "+splitArr[i]);
        // console.log("length of i is: "+splitArr[i].length);
        for(let j = 0; j < splitArr[i].length; j++){
            // console.log("inside JJJ: "+splitArr[i][j]);
            if((splitArr[i][j] >= 1) && (splitArr[i][j] <= 9)){
                // console.log("inside IF LOOP: "+splitArr[i][j]);
                const wordObj = new Object();
                wordObj.word = splitArr[i];
                wordObj.number = splitArr[i][j];
                arrayObjs.push(wordObj);
            }
        }
    }

    // console.log(arrayObjs);
    // console.log(arrayObjs[0].word);
    // console.log(arrayObjs[0].number);

    // arrayObjs.sort(function(a, b) { return a.number - b.number; });
    arrayObjs.sort((a, b) => a.number-b.number);


    // console.log(arrayObjs);
    // console.log(arrayObjs[0].word);
    // console.log(arrayObjs[0].number);

    let res = [];
    for(word of arrayObjs){
        res.push(word.word);
    }
    // console.log(res);
    // console.log(res.join(" "));

    return res.join(" ");
    
  }

  order("4of Fo1r pe6ople g3ood th5e the2");

//best sol
//   function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }   