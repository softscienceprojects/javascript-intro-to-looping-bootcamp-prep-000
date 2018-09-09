
var loopTests = ["1", "2", "3"];

function forLoop(array){
  for (let i = 0; i<25; i++) {
    if (forLoop === 1) {
    array.push("I am " + i + " strange loop");
  } else {
    array.push('I am ' + i + ' strange loops');
    }
  }
};


function incrementVariable(loopTests) {
   loopTests = loopTests +1;
}

do {
  console.log("LOOPIng");
  incrementVariable();
} while (array.length > 0 && incrementVariable());
