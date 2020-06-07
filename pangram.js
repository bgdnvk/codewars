//pangram
//https://stackoverflow.com/questions/53511692/how-to-detect-a-pangram
//https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/match

function isPangram(string){
//   let result = string.toLowerCase().match(/a-z/g).length === 25? true: false;
//   return result;
    var regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex) || []).length === 26;
}