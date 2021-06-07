function* fibs() {
  let [val1, val2, result] = [0, 1, 0];
  yield val1;
  yield val2;
  while (true) {
    result = val1 + val2;
    val1 = val2;
    val2 = result;
    yield result;
  }
}
//Get a few fibs
function* evenFibs() {
  const myFibs = fibs();
  let peanut;
  while (true) {
    peanut = myFibs.next().value;
    if (peanut % 2 === 0) {
      yield peanut;
    }
  }
}
// myFibs = fibs();
// let count = 30;
// while (count-- > 0) {
//   console.log(myFibs.next().value);
// }

// function* evenfibs() {
//   myFibs = fibs();
//   let myNum = myFibs.next().value;
//   console.log(myNum);
//   yield myNum;
// }

newFibs = evenFibs();
let count = 6;
while (count-- > 0) {
  console.log(newFibs.next().value);
}
