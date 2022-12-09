//https://leetcode.com/problems/text-justification/
function fullJustify(words: string[], maxWidth: number): string[] {

    let insertedAt: number = 0;
    let arrText: string[] = [];
    let arrParagraph: string[] = [];

    for(let i = 0; i < words.length; i++){
        if(insertedAt + words[i].length <= maxWidth){
            arrParagraph.push(words[i])
            insertedAt += words[i].length
            arrParagraph.push(" ")
            insertedAt++;
            if(i === words.length-1){
                arrText.push(arrParagraph.join(""))
            }
        } else {
            //push the current paragraph and restart the count
            arrText.push(arrParagraph.join(""))
            arrParagraph = [];
            insertedAt = 0;
            //push into the new paragraph and update the count
            arrParagraph.push(words[i])
            arrParagraph.push(" ")
            insertedAt += words[i].length
            insertedAt++;
            //if i is last
            if(i === words.length-1){
                arrText.push(arrParagraph.join(""))
            }
        }
    }
    let r: string[] = justifyParagraph(arrText, maxWidth)
    return r;
};

function justifyParagraph(arr: string[], mw: number): string[] {

    for(let i = 0; i < arr.length; i++) {
        //justify last
        if(i === arr.length-1) {
            //push last
            let fill: number = mw - arr[i].length
            //TODO: ???
            if(fill < 0) {
                let newArr: string[] = [...arr[i]]
                newArr.pop()
                arr[i] = newArr.join("")
                return arr
            }

            const spaces: string = ' '.repeat(fill)
            let newArr: string;
            newArr = [...arr[i], spaces].join("")
            arr[i] = newArr
        } else {
            //justify normal paragraph
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

    let idxArr: number[] = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === ' ') {
            idxArr.push(i)
        }
    }

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