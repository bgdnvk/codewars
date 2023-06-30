func containsDuplicate(nums []int) bool {
    set := make(map[int]struct{})
    
    for _, v := range nums {
        if _, ok := set[v]; ok{
            return true
        } else {
            set[v] = struct{}{}
        }
    }

    return false
}