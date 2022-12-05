//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
export class Kata {
    static disemvowel(str: string): string {
      
      let res: string[] = [];
      
      for(let i = 0; i < str.length; i++){
        if(/^[aeiou]$/.test(str[i].toLowerCase())) {
          continue
        }
  //       console.log(str[i])
        res.push(str[i])
      }
      let resString = res.join("");
      return resString;
    }
  }