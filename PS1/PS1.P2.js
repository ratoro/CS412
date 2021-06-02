const evaluate = (str) => {
  let [leftStr, expression, rightStr] = str;
  let left = parseInt(leftStr);
  let right = parseInt(rightStr);
  switch (expression) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
    case "^":
      return Math.pow(left, right);
  }
};

const expressions = ["4+2", "5*7", "6-1", "9/2", "2^8"];

var i;
for (i = 0; i < expressions.length; i++) {
  console.log(`${expressions[i]} = ${evaluate(expressions[i])}`);
}

// const peanut = "43";
// let num = parseInt(peanut);
// console.log(num);
