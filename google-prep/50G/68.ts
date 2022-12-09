//https://leetcode.com/problems/text-justification/
function fullJustify(words: string[], maxWidth: number): string[] {

    let insertedAt: number = 0;
    let arrText: string[] = [];


    let arrParagraph: string[] = [];

    for(let i = 0; i < words.length; i++){
        console.log("**** start of the loop")
        console.log(words[i])
        console.log(words[i].length)

        console.log("loop comparison: ", insertedAt + words[i].length)

        if(insertedAt + words[i].length <= maxWidth){
            console.log("--inside if")
            
            //TODO: something to check for last position

            //push word into current arr paragraph 
            arrParagraph.push(words[i])
            insertedAt += words[i].length
            console.log("first inserted at", insertedAt)
            arrParagraph.push(" ")
            insertedAt++;
            console.log("second inserted at", insertedAt)

            console.log("arr prg: ", arrParagraph)
            console.log("inserted at: ", insertedAt)
            if(i ===words.length-1){
                arrText.push(arrParagraph.join(""))
            }
        } else {
            console.log("++inside else")
            //push the current paragraph and restart the count
            arrText.push(arrParagraph.join(""))
            console.log("arr prg: ", arrParagraph)
            arrParagraph = [];
            insertedAt = 0;
            //push into the new paragraph and update the count
            arrParagraph.push(words[i])
            arrParagraph.push(" ")
            console.log("arr prg: ", arrParagraph)
            insertedAt += words[i].length
            insertedAt++;
            //if i is last
            if(i ===words.length-1){
                arrText.push(arrParagraph.join(""))
            }
        }
    }

    let r: string[] = justifyParagraph(arrText, maxWidth)

    console.log("r is", r)

    console.log(arrText)
    
    return r;
};

function justifyParagraph(arr: string[], mw: number): string[] {

    for(let i = 0; i < arr.length; i++) {

        //justify last
        if(i === arr.length-1) {
            //push last
            let fill: number = mw - arr[i].length
            console.log("first fill: ", fill)
            const spaces: string = ' '.repeat(fill)
            let newArr: string;
            newArr = [...arr[i], spaces].join("")
            arr[i] = newArr
            console.log("newArr: ", newArr)
            console.log("spaces is:", spaces)
            console.log("last arr[i]: ", arr[i])
            console.log("last arr[i] length ", arr[i].length)
            
        } else {
            //justify normal paragraph
            console.log("not last: ", arr[i])
            arr[i] = addSpaces(arr[i], mw)
        }
    }

    return arr

}

function addSpaces(s: string, mw: number): string {

    //remove last space
    if(s[s.length-1] === ' '){
        s = s.slice(0, -1)
    
    }
    let fill: number = mw - s.length

    console.log("s is: ", s)
    console.log("s length is", s.length)
    console.log("fill is ", fill)

    let idxArr: number[] = []

    for(let i = 0; i < s.length; i++){
        console.log("s is: ", s[i])
        console.log("--i is: ", i)
        if(s[i] === ' ') {
            console.log("space found")
            idxArr.push(i)
        }
    }

    //if there are no spaces return
    //TODO: change
    //doesn't work with one giant word that might need spaces
    if(idxArr.length === 0 && fill === 0) {
        return s
    }

    let newS: string[] = [...s]
    if(idxArr.length > 0) {
        while(fill > 0) {
            for(let i = 0; i < idxArr.length; i++){
                if(fill > 0) {
                    newS[idxArr[i]] = newS[idxArr[i]] + " "
                    fill-- 
                }
            } 
        }
    } else {
        while(fill > 0) {
            newS.push(" ")
            fill--
        }
    }

    s = newS.join("")

    return s
}