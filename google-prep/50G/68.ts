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

    console.log(arrText)
    
    return arrText;
};
