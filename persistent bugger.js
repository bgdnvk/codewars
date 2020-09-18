//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
    //code me
    //let converted = Array.from(String(num), Number);

    let converted = (num) => Array.from(String(num), Number);

    let res = converted(num);

    if(res.length === 1){
        return 0;
    }

    let count = 0;
    let temp;
    while(res.length > 1){
        temp = res.reduce(
            (acc, curr)=> acc*curr
        );
        res = converted(temp);
        count++;
    }
    return count;
 }