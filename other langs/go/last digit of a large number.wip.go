package kata

//https://www.codewars.com/kata/5511b2f550906349a70004e1/train/go

import (
  "fmt"
  "math"
  "strconv"
)


func LastDigit(n1, n2 string) int {
  
  num1, _ := strconv.ParseFloat(n1, 32)
  num2, _ := strconv.ParseFloat(n2, 32)
  
  t := math.Pow(num1, num2)
  
//   fmt.Println(t)
  
  mod := math.Mod(t, 10)
  fmt.Println(mod)
  
  return int(mod)
}
