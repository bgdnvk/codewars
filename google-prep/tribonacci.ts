//https://www.codewars.com/kata/556deca17c58da83c00002db/train/typescript
export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  //edge cases
  if(n <= 0) {
    return []
  }
  if(n === 1) {
    return [a]
  }
  if(n < 3){
    return [a,b]
  }
  
  let pivot: number = 2;
  let res: number[] = [a,b,c];
  
  function sumPrev(arr: number[], pivot: number): number{
    let sum: number = 0;
    
    for(let i = 0; i < 3; i++){
      sum += arr[pivot-i];
    }
    return sum;
  }
  
  for(let i = 0; i < n-3; i++){
    let sum: number = sumPrev(res, pivot);
    pivot++;
    res.push(sum)
  }
  
  return res;
}