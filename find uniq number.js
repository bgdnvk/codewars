 
  function findUniq(arr) {
    arr.sort();
   let last = arr.slice(-1)[0];
 
   
   if (arr[0] === arr[1] && arr[1] === arr[2]){
       return last;
   } else{
       return arr[0];}
   }
 

findUniq([ 3, 10, 3, 3, 3 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 1, 1, 1, 2, 1, 1 ])


/* Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10); */