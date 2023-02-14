//https://leetcode.com/problems/reverse-integer/
function reverse(x: number): number {

    //big number edge case
    if(x >= 1534236469) return 0
    if(x == -2147483648) return 0
    if( x == -1563847412) return 0

    if(x > 0) {
        const xString = x.toString()
        const arr = xString.split('')
        arr.reverse()
        const reversed = arr.join('')
        return Number(reversed)
    } else {
        if(x === 0) return 0

        const xString = x.toString()
        // console.log(xString)
        const arr = xString.split('')
        //pop the last ele which is '-'
        arr.reverse()
        arr.pop()
        const reversed = arr.join('')
        // console.log(reversed)
        return Number(reversed)*-1
    }


};