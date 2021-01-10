function mix(s1, s2) {
    // your code
    console.log(...s1)
  //   countLetters(s1
  //     .split('')
  //     .filter(c => isLowC(c)))
    getLettersObj(s1)
  //   console.log(s1[0])
    return isLowC(s1[0])
  }
  
  
  
  const isLowC = (c) => c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
  const countLetters = (arr) => {
    console.log('inside countL',arr)
    let obj = {}
    for (let c of arr){
      obj[c]? obj[c]++: obj[c] = 1
    }
    console.log(obj)
    return obj
  }
  const getLettersObj = (str) => {
    return countLetters(str
                       .split('')
                       .filter(c => isLowC(c)))
  }