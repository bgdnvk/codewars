//https://leetcode.com/problems/integer-to-roman/
function intToRoman(num: number): string {

    const str = num.toString()
    const arr = str.split('').map(Number).reverse()
    // console.log(arr)

    const resArr = []
    for(let i = 0; i < arr.length; i++) {
        let temp = romanNum(arr[i], i)
        resArr.push(temp)
    }
    // console.log('resArr', resArr)

    return resArr.reverse().join('') 
};

function romanNum(num: number, position: number): string {
    
    let res = ''

    switch(position) {
        case 0:
        if(num <= 4) {
            if(num === 4) {
                res = 'IV'
            } else {
                res = 'I'.repeat(num)
            }
        }
        if(num === 5) {
            res = 'V'
        }
        if(num > 5) {
            console.log('num > 5')
            if(num === 9) {
                res = 'IX'
            } else {
                console.log('num', num)
                res = 'V'.concat('I'.repeat(num-5))
            }
        }
        break
        
        case 1:
        if(num <= 4) {
            if(num === 4) {
                res = 'XL'
            } else {
                res = 'X'.repeat(num)
            }
        }
        if(num === 5) {
            res = 'L'
        }
        if(num > 5) {
            if(num === 9) {
                res = 'XC'
            } else {
                res = 'L'.concat('X'.repeat(num-5))
            }
        }
        break

        case 2:
        if(num <= 4) {
            if(num === 4) {
                res = 'CD'
            } else {
                res = 'C'.repeat(num)
            }
        }
        if(num === 5) {
            res = 'D'
        }
        if(num > 5) {
            if(num === 9) {
                res = 'CM'
            } else {
                res = 'D'.concat('C'.repeat(num-5))
            }
        }
        break

        case 3:
        res = 'M'.repeat(num)
    }

    // console.log('res:', res)
    return res
}