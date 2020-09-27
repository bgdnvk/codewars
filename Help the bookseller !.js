//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
function stockList(listOfArt, listOfCat){
    // ... 
    console.log(listOfArt)
    console.log(listOfCat)
    
  //   console.log(listOfArt[0].match("z"))
    
    function matchLetter(letter){
      let nums = 0;
      let tNums = 0;
      let tempArr = [];
      for(let i = 0; i <listOfArt.length; i++){
        
        if(listOfArt[i].match(letter)){
  //         let letterAt = listOfArt[i].match(letter).index;
          let spaceAt = listOfArt[i].indexOf(" ");
          console.log("space at "+spaceAt)
          nums = nums + parseInt( listOfArt[i].slice(spaceAt+1, listOfArt[i].length));
          console.log(listOfArt[i].slice(spaceAt+1, listOfArt[i].length))
          console.log("nums is "+nums)
          tempArr.push(letter, nums);
        }
        
        nums = 0;
      }
      console.log(tempArr)
    }
    
    let resArr = [];
    let sum = 0;
    
    for(const word of listOfCat){
      console.log(word);
      if(matchLetter(word)){
        sum+=matchLetter(word);
      }
      console.log("sum is "+sum+" letter is "+word);
      sum = 0;
    }
    
  //   matchLetter("A")
  }