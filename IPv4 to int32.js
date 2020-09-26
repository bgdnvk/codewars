//https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript
/**
 * Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.


Integer format

To convert an IP address to integer notation, each section of the IP address (separated by ".") is multiplied by 256x. In this case, x represents the position of the section from right to left, starting with 0. Here is an example using this formula:
192.168.1.1 = (192 * 2563) + (168 * 2562) + (1 * 2561) + (1 * 2560)
 */

function ipToInt32(ip){
    //...
    let tempArr = [],
        ipArr = ip.split(".").reverse();
      for(let i = 0; i < ipArr.length; i++){
        tempArr.push(ipArr[i]*Math.pow(256, i))
      }
      return tempArr.reduce((acc,curr) => acc+curr);
    
  //     console.log(tempArr)
  //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //     console.log(tempArr.reduce(reducer))
  
    
  //   console.log(ip.split("."));
  //   let ipArr = ip.split(".");
  //   function toBinary (e){
  //     console.log(e)
      
  //    for(let i = e; i >= 1; i= Math.floor(i/2)) {
  // //      console.log("i is "+i);
  // //      console.log("modulus is "+i %2)
  //       if (i % 2 === 1){
  // //       console.log("inside 1: "+i)
  //       tempArr.push(1);
  //       } else if(i % 2 === 0){
  // //       console.log("not inside 1: "+i)
  //       tempArr.push(0);
  //     }
  //    }
  //     tempArr.reverse();
  //     console.log("tempArr returned "+tempArr)
  //     return tempArr;
  //   }
  //   toBinary(29);
    
  //     function from_Binary_to_Decimal(arr){
  // //       let increment = 1;
  //       arr.reverse();
  // //       let tempArr = [];
  //       console.log("arr to convert is "+arr)
  //       let tempRes = 0;
  //         for(let i = 0; i < arr.length; i++){
  // //           tempArr.push(arr[i]*Math.pow(2,i))
  // //           console.log("tempRes is "+tempRes)
  // //           console.log("res is "+arr[i]*Math.pow(2,i))
  //           console.log("tempres is "+tempRes)
            
  //           tempRes += arr[i]*Math.pow(2,i)
  //         }
  // //       console.log(tempArr);
  //       console.log("tempres is "+tempRes)
  //       return tempRes;
  //     }
  
  
  //   from_Binary_to_Decimal([ 1, 1, 1, 0, 1 ]);
    
  //   function appAll(e){
  //     return from_Binary_to_Decimal(toBinary(e))
  //   }
    
  //   console.log(appAll(128))
    
  
  
  //   console.log(ipArr);
  //   tempArr = ipArr.map( e => {
  //     console.log("e is "+e)
  //     console.log("e to binary is "+toBinary(e))
  //     return toBinary(e)
  //   })
    
  //   for(const e of ipArr){
  //     console.log(e);
  //     console.log(toBinary(e))
  //     tempArr.concat(toBinary(e));
  //   }
  
    
  //   console.log("tempArr is "+tempArr)
    
  //   console.log("tempArr is "+typeof tempArr)
  //   let res = from_Binary_to_Decimal(tempArr)
  //   console.log("tempArr is "+res)
  //   if( res >= 2149583361){
  //     return 2149583361;
  //   }
  //   return res;
    
    
    
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   console.log(tempArr.reduce(reducer));
    
    
  }
  
  