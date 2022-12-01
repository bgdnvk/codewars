//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/typescript

export function solution(str: string, ending: string): boolean {
  
    if(ending.length > str.length) {
      return false
    }
  //   console.log(str)
  //   console.log(ending)
    
    for(let i = 0, j = ending.length -1; j >= 0; j--, i++){
  //     console.log("i: ", i)
  //     console.log("i arr: ",str[str.length-1-i])
  //     console.log("j: ", j)
  //     console.log("j arr", ending[j])
      if(ending[j] !== str[str.length-1-i]){
        return false
      }
    }
    
    return true; // TODO: complete
  }