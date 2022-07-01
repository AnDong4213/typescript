export const stringToArr = (nameStr: string, keyword: any[]): any[] => {
  let splitWords: any[] = [];
  let posSet = new Set();
  let sortWord: any[] = [];
  keyword = [...new Set(keyword)];

  for (let key of keyword) {
    for (let value of [...nameStr.matchAll(new RegExp(key, "g"))]) {
      posSet.add(value);
    }
  }
  posSet.forEach((set: any) => {
    sortWord.push({
      key: set[0],
      num: set.index
    });
  });

  sortWord.sort((a, b) => a.num - b.num);
  let newKeyword = sortWord.map((n) => n.key);
  // console.log(newKeyword);

  newKeyword.forEach((key, index) => {
    let sName = nameStr.split(key);
    splitWords.push(sName[0]);
    splitWords.push(key);
    if (index === newKeyword.length - 1) {
      splitWords.push(sName[1]);
    }
    nameStr = nameStr.substring(nameStr.indexOf(key) + key.length);
  });

  return splitWords;
};

let name =
  "Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.";
let word = ["the "];

console.log(stringToArr(name, word));
