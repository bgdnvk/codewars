//https://leetcode.com/problems/chunk-array/description/?utm_campaign=PostD21&utm_medium=Post&utm_source=Post&gio_link_id=YoXvrdGR
function chunk(arr: any[], size: number): any[][] {
    const res: Array<any> = []
    for(let i = 0; i < arr.length; i+=size) {
        res.push(arr.slice(i, i+size))
    }
    return res
};