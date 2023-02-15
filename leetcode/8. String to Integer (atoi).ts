//https://leetcode.com/problems/string-to-integer-atoi
function myAtoi(s: string): number {
    const res = parseInt(s)
    if(!res) return 0
    if(res <= -2147483648) {
        return -2147483648
    }
    if(res >= 2147483647) {
        return 2147483647
    }

    return res
};