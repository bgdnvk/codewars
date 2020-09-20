//https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript
//https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript
let countDeafRats = (town) => {
    // Your code here

  const P = "P";
  let arrTown = [...town].filter(e => e !== " ");
  
   if(arrTown.length === 1){
    return 0;
  }
  
  let pIndex = arrTown.indexOf(P);
  arrTown.splice(pIndex,1);
  pIndex = pIndex/2;
  let arrRats = [];

  for (let i = 0; i< arrTown.length; i=i+2){
    arrRats.push(arrTown[i]+arrTown[i+1]);
  }
   console.log(arrRats);
   
  let wrongRats = 0;

  for(let i = 0; i<pIndex; i++){
    if(arrRats[i][0] === "O"){
      wrongRats++;
    }
  }
  for(let i = pIndex; i<arrRats.length; i++){
    if(arrRats[i][1] === "O"){
      wrongRats++;
    }
  }
  return wrongRats;
  }
  
  