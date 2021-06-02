const decoration = (str, decorator) => {
  return decorator(str);
};
string = "supercalifragilisticexpialidocious";

console.log(
  decoration(string, (stringToUse) => {
    let StringArr = string.split(/(?=c)/g);

    return StringArr;
  })
);

console.table(
  decoration(string, (stringToUse) => {
    let StringObject = {
      OrginalString: string,
      modifiedString: string.replace(/a/g, "A"),
      numberReplaced: (string.match(/a/g) || []).length,
      length: string.length,
    };
    return StringObject;
  })
);

// const testString = "peeeeenut";
// console.log((testString.match(/e/g) || []).length);
