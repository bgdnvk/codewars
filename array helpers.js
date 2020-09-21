// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
let arrProto = Array.prototype;

arrProto.square = function() {
  return this.map( e => Math.pow(e, 2));
}

arrProto.cube = function(){
    
}