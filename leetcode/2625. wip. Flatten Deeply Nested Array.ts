//https://leetcode.com/problems/flatten-deeply-nested-array/description/?utm_campaign=PostD22&utm_medium=Post&utm_source=Post&gio_link_id=rREX6Gm9
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if(n === 0) return arr

    const res: MultiDimensionalArray = []

    arr.forEach(e => {
        if(typeof e === 'number') res.push(e)
        else {
            res.push(...flat(e, n-1))
        }
    })

    return res
    
};