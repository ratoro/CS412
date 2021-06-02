//Get a few fibs
myFibs = fibs();
let count = 30;
while (count-- > 0) {
  console.log(myFibs.next().value);
}