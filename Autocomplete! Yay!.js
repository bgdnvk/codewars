//https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript
/**
 * 
 * It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
 */

function autocomplete(input, dictionary){
    input = input.match(/[a-zA-Z]/g).join('');
    console.log(input)
    return dictionary.filter( e => {
      return e.slice(0, input.length).toUpperCase() === input.toUpperCase();
    }).slice(0,5)
  }
  // autocomplete('ai', ['airplane','airport','apple','ball']) 