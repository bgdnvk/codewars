//https://leetcode.com/problems/zigzag-conversion/
//https://leetcode.com/problems/zigzag-conversion/solutions/3182577/js-ts-with-comments/
function convert(s: string, numRows: number): string {

    // console.log(s)
    //zig = filling the rows
    const zig = numRows
    //zag filling the 45º letters
    const zag = zig - 2
    //check if we are doing zig or zag
    let zagTracker = 0 
    //res arr
    const arr: string[][] | any = []
    //word index
    let i = 0
    while(i < s.length) {
        // console.log(s[i])
        //arr used for tracking zig
        let currArr: string[] | any  = []
        //check if we are doing zig or zag
        if(zagTracker === 0) {
           //get all the zig (column) chars inside an arr
            for(let idx = i; idx < i+zig; idx++) {
                //if out of bounds just push null
                if(idx >= s.length) {
                    currArr.push(null)
                } else {
                    currArr.push(s[idx])
                }
            }
            //get the zig
            arr.push(currArr)
            //empty array
            // currArr = []
            //increment i to zig
            i += zig 
            //next is zag, so we activate it by giving it value
            zagTracker = zag
        } else {
            //while we have zag letters we fill the arr and increment our index
            while(zagTracker > 0) {
                currArr.push(s[i])
                // arr.push(s[i])
                zagTracker--
                i++
            }
            arr.push(currArr)
            //once the zagging is finished we reset it so we can zig
            zagTracker = 0
            currArr = []
        }
        
    }
    // console.log(arr)

    return buildString(arr, s, numRows)
};

function buildString (arr: string[][] | any, s:string, numRows: number): string {
    const arrString: any = []

    //reverse arr
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            //edge case
            if(numRows !== arr[i].length) {
                arr[i].reverse()
                arr[i].unshift(null)
                arr[i].push(null)
            } 
        }
    }

    // console.log(arr)

    let rowTracker = 0
    //once we have the zigzag array iterate over it and put it in a string
    while(rowTracker < numRows) {
        for(let i = 0; i < arr.length; i++) {
            let curr = arr[i][rowTracker]
            // console.log(curr)
            if(curr) arrString.push(curr)
        }
        rowTracker++
    }

    return arrString.join('')
}