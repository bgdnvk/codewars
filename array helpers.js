// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
let arrProto = Array.prototype;

arrProto.square = function() {
  return this.map( e => Math.pow(e, 2));
}

arrProto.cube = function(){
    return this.map( e => Math.pow(e, 3));
}

arrProto.sum = function(){
    if(this.length === 0){
        return 0;
      }
    return this.reduce((previousValue, currentValue) => previousValue + currentValue);
}

arrProto.average = function(){
    return this.sum()/this.length;
}

arrProto.even = function(){
    return this.filter( e => e % 2 === 0);
}

arrProto.odd = function(){
    return this.filter( e => e % 2 !== 0);
}