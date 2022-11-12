package kata

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/go

func SmallestIntegerFinder(numbers []int) int {
	i := numbers[0]

	for _, v := range numbers {
		if v < i {
			i = v
		}
	}
	return i // your code here
}
