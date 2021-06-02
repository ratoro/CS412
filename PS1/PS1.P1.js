const string = "supercalifragilisticexpialidocious";

const result = (a, b) => {
  const reference = [-1, 0, 1];
  return reference[+(a < b)];
};
const reverseAlphaSort = (str) => {
  const StringArr = str.split("");
  return StringArr.sort(result).join("");
};
console.log(reverseAlphaSort(string));
