//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
/**
 * Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

https://www.vedantu.com/maths/harmonic-progression
 */
function SeriesSum(n)
{
    if(n ===0){
        return "0.00";
    }
    let sum = 1;
    for(let i = 1; i<n;i++){
        sum = sum+ 1/(1+i*3);
        // console.log("inside loop "+sum);
        
    }
    let result = Number(sum).toFixed(2).toString();
    // console.log(result);
    // console.log(typeof(result));
    return result;
    
}

SeriesSum(4);
SeriesSum(3);
SeriesSum(0);