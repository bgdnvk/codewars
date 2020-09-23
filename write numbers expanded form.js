//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
/**
 * 
 * @param {*} num 
 * expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
 */
function expandedForm(num) {
    // Your code here
    num = num.toString();
    let numArr = [...num];
    let sumArr = [];
    let numLength = numArr.length-1;
    
    for (const num of numArr){
      if(num !== "0"){
        let zeros = "0".repeat(numLength);
        sumArr.push(num+""+zeros)
      }
      numLength--;
    }
    return sumArr.join(" + ");
  }
  