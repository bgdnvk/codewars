//https://leetcode.com/problems/text-justification/
function fullJustify(words: string[], maxWidth: number): string[] {

    let insertedAt: number = 0;
    let arrText: any = [];


    let arrParagraph: string[] = [];

    for(let i = 0; i < words.length; i++){
        console.log(words[i])
        console.log(words[i].length)


        if(insertedAt < maxWidth){
            
            //TODO: something to check for last position
            arrParagraph.push(words[i])
            insertedAt += words[i].length
            arrParagraph.push(" ")
            insertedAt ++;

            console.log("arr prg: ", arrParagraph)
        } else {
            arrText.push(arrParagraph)
            arrParagraph = [];
        }
    }

    console.log(arrText)
    
    return arrText;
};
