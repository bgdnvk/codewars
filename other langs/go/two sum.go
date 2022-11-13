package kata

//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/go

func TwoSum(numbers []int, target int) [2]int {
  
  for i := 0; i < len(numbers); i++ {
    for j := 1; j < len(numbers); j++ {
      if numbers[i] + numbers[j] == target {
        return [2]int{i,j}
      }
    }
  }
  
    return [2]int{}
}