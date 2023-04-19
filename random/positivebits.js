//https://github.com/Dudy-Dev-Team/recruit-challanges
// Given an integer n, we want an array as an output like:

// Fist index: how many 1-bits are in its binary representation
// Subsequent indexes: respective positions of the one-indexed 1-bits in n's binary representation.
// Example: Input = 39 which binary representation is 100111 should return this output [ 4, 0, 3, 4, 5 ]. 4: there are 4 positive bits 0, 3, 4 and 5: respective positions of the one-indexed 1-bits

function getPositiveBits(n) {
  //convert to binary 
  const binaryStr = n.toString(2)
  console.log('binary from num:', binaryStr)

  //get number of positive bits 
  //can replace w/ smth else since regex is evil
  const positiveBits = binaryStr.replace(/0/g, '').length
  console.log('count', positiveBits)

  //arr w/ indexes
  //add positiveBits since we already know all the positive bits we have, now we just insert from the end so the run time is sweet
  const resArr = [positiveBits]
  console.log('arr w/ indexes', resArr)

  //loop and check 1 bits 
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
        console.log(`adding index ${i}`)
        resArr.push(i)     
    }
  }

  return resArr
}

const res = getPositiveBits(39)
console.log(res)