//https://www.codewars.com/kata/55466989aeecab5aac00003e/train/typescript
export const sqInRect=(l:number, w:number): null|number[] =>{
  
    console.log("new program")
    console.log("L ", l);
    console.log("W ", w)
  
    if(l === w) {
      return null
    }
    let res: number[] = [];
    let squares: number = l*w;
    let totalSquares: number = l*w;
  
    while (squares > 0 && totalSquares !== 0){
      console.log("squares: ", squares);
      console.log("TOTAL squares: ", totalSquares);
      
      let sqrt: number = Math.sqrt(squares);
      console.log("sqrt: ", sqrt);
      
      if(Number.isInteger((sqrt))) {
        console.log("sqrt FOUND: ", sqrt);
        res.push(sqrt);
        totalSquares = totalSquares - sqrt*sqrt;
        squares=totalSquares;
      } else { 
        squares--;
      }
    }
  
    return res
}