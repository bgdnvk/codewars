//https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript
function mean(town, strng) {
    // Your code
  find(town, strng);
}
function variance(town, strng) {
    // Your code
  find(town, strng);
  
 
}

function find(town, strng){
  let dataArr = strng.split("\n");
  const num_rex = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
  let numbers = dataArr.join("").match(num_rex);
  console.log(dataArr);
  console.log(numbers);
  
  return dataArr;
}