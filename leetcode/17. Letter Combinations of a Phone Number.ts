//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
function letterCombinations(digits: string): string[] {

    if(digits.length === 0) return []

    const map = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

    const numbers = digits.split('')
    // console.log(numbers)
    const first = map[numbers[0]].split('')

    if(digits.length === 1) return first

    const stack = []
    const res = []
    // console.log(first)

    for(let i = 1; i < numbers.length; i++) {
        let letters = map[numbers[i]]
        for(let w of letters) {
            stack.push(w)
        }
    }
    console.log(stack)

    for(let i = 0; i < stack.length; i++) {

        for(let j = 0; j < first.length; j++){
            res.push(first[j]+ ''+stack[i])
        }
    }

    // console.log(res)

    return res
};