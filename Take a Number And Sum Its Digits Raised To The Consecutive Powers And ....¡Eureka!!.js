function sumDigPow(a, b) {
    // Your code here
    let converted = (num) => Array.from(String(num), Number);


    let eurekArr = [];
    let digits;
    for (let i = a; i<=b; i++){
        digits = converted(i);
        if(i === digits.reduce(
            (acc, curr, indx) => acc+curr**(indx+1))){
            eurekArr.push(i)
        }
    }
    return eurekArr;
  }
  