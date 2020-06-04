function duplicateCount(text){
    let loweredText = text.toLowerCase();
    let textArr = [...loweredText];
    textArr.sort();
    
    console.log(text);
    console.log(textArr);
   //
   console.log('finddup of main prg: '+findDup(textArr));
   
   return findDup(textArr);
    
  }
  
  function findDup(str){
    let dict = {};
    str.forEach((word)=>
    //I've made all this up so I could make a dict using an OR
    dict[word] = (dict[word] || 0)+1
    );
    console.log(dict);
    let valuesArr = Object.values(dict);
    console.log('all the values of the dict: '+Object.values(dict))
    
    return countAboveOne(valuesArr)
  }
  
  function countAboveOne(arr){
    let count = arr.filter(x => x>1).length
    console.log('count number is: '+ count);
    return count;
  }