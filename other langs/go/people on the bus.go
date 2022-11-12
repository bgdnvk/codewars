package kata

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/go

import(
  "fmt"
)

func Number(busStops [][2]int) int {
  
  sum := 0
  
  for i := 0; i < len(busStops); i++ {
    fmt.Println("i is", busStops[i])
    sum += busStops[i][0] - busStops[i][1]
  }
  
  return sum 
}