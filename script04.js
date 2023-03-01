function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sum = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sum = sum + 1;
    }
  }
  return sum;
}

console.log(1, countSheeps(
  [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
  ]
));

function boolToWord( bool ){
  return (bool) ? "Yes" : (!bool) ? "No" : "";
}

console.log(2, boolToWord(false));