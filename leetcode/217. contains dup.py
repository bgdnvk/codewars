class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for v in nums:
            if v in hashset:
                return True
            hashset.add(v)
            
        return False        
