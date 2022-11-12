package kata

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/go

import(
  "fmt"
)

func century(year int) int {
  
  fmt.Println(year)
  c := 0
  
  if year < 100 {
    return 1
  }
  
  for i:= 0; i < year; i+=100{
    c++
  }
  
  fmt.Println("c: ", c)
  return c
}