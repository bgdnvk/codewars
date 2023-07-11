//https://leetcode.com/problems/valid-palindrome/description/
func isPalindrome(s string) bool {
    arr := []rune{}
    for _, v := range s {
        if unicode.IsLetter(v) || unicode.IsDigit(v) {
            letter := unicode.ToLower(v)
            arr = append(arr, letter)
        }
    }

    for i, _ := range arr {
        first := arr[i] 
        second := arr[len(arr) -i -1]
        if first != second {
            return false
        }
    }

    return true
}