//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
/**
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:
 */
var number=function(array){
    if(array.length === 0) return array;
    const nArr = [];

    // array.forEach(element => {
    //     nArr.push(
    //         `${array.indexOf(element)+1}: ${element}`
    //     )    
    // });

    for (let i = 0; i<array.length; i++){
        console.log(array[i]);

        nArr.push(
                    `${i+1}: ${array[i]}`
                )    
    }

    console.log(nArr);
    return nArr;
    
  }

  number(["a", "b", "c"]);
  //let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)