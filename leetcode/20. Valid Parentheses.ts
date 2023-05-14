//https://leetcode.com/problems/valid-parentheses/description/
function isValid(s: string): boolean {
    const chars = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    const str: string[] = s.split('')
    //keep stack of all the elements
    const stack: string[] = []
    for(let i = 0; i < str.length; i++) {
        const curr = str[i]
        //check if it's a closing tag
        if(curr in chars) {
            const lastIn = stack.pop()
            //check that it's the correct closing tag aka check the last in from stack and the current element (that gets its opening tag from dict)
            if(chars[curr] !== lastIn) {
                return false
            }
        } else {
            //if it's not a closing tag then push into stack
            stack.push(curr)
        }
    }
    //make sure there are no elements to check
    if(stack.length > 0) return false

    return true
};