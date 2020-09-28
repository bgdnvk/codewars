//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"


 */
function domainName(url){
    //https://stackoverflow.com/a/59897765/14356309
    //https://regex101.com/r/pX5dL9/1
    return url.replace(/.+\/\/|www.|\..+/g, '')
  }

  /**
   * 
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
   */