//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
/**
 * 
 * A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
 * @param {*} data 
 */
function dataReverse(data) {
    // Your code here
    let tempArr = [];
    const cutTimes = data.length/8;
    
    for(let i = 0; i < cutTimes; i++){
      tempArr=tempArr.concat(data.slice(-8));
      data.splice(-8);
    }
    return tempArr;
  }