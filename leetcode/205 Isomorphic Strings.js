//https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan&id=level-1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   const sSet = new Set() 
   const tSet = new Set() 
   for(let char of s) {
       sSet.add(char)
   }

   for(let char of t) {
       tSet.add(char)
   }

   return sSet.size === tSet.size
};