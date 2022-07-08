//https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(string){
    //TODO Have fun :)
    const arr = string.split(" ")
    const res = []
    for (word of arr){
      
      if(word.length>=5){
        console.log({word})
        word = word.split("").reverse().join("")
        console.log({word})
        res.push(word)
      } 
        else {
         res.push(word) 
        }
      
    }
    console.log(res)
    return res.join(" ")
  }