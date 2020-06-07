//IQ test
/* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness. 
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0) */
//iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
    console.log('\n');
    console.log('NEW EXEC###########################################');

    
    let splitArr = numbers.split(' ').map(
        x => parseInt(x)
    );
    console.log('splitArr is: '+splitArr);
    console.log(typeof(splitArr[0]));
    console.log(typeof(splitArr[1]));
    console.log('');
    

    return findArrPosition(isArrayEven(splitArr),splitArr);
  }

  function isArrayEven(arr){
      console.log('----inside isArrayEven----');
      
    let countEven = 0;
    for (let i in arr){
        
        if(arr[i] % 2 === 0){
            countEven++;
        }
    }
    console.log('countEven is: '+countEven);
    
    let result = countEven > 1?  true:  false;
    console.log('result of even is : '+result);
    console.log('----FINISHED isArrayEven----');
    
    return result;
  }
  
  function findArrPosition(isArrEven, arr){
      console.log('************inside Arrayposition ************');
      //if it's not even look for the 1st EVEN number
      if (!isArrEven){
          console.log('array is even ----------');
          
        for (let i in arr){
        
            if (arr[i] % 2 === 0 ) {
               
               console.log(' IF EVEN--       -IF CORRECT------');
               console.log('position of i '+i);
               console.log('the number is '+arr[i]);
               console.log('----------------'); 
   
               let result = i;
               result++;
               console.log('returned final result '+result);
               console.log('returned type result '+typeof(result));
               
               return result; 
           }
       }
      } else{
        console.log('array is odd ---------------');
        for (let i in arr){
        
            if (arr[i] % 2 !== 0 ) {
               
               /* console.log('        -IF CORRECT------');
               console.log('position of i '+i);
               console.log('the number is '+splitArr[i]);
               console.log('----------------'); */
   
               let result = i;
               result++;
               console.log('returned final result '+result);
               console.log('returned type result '+typeof(result));
               
               return result; 
           }
   
       }
      }
  }

  iqTest("2 4 7 8 10")
  console.log('################################# RESULT IS '+
    iqTest("2 4 7 8 10")
  );
  
  iqTest("1 2 2")