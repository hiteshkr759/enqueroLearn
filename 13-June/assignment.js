/* 
Question 1

1. You will write a script which will alloate array of 20 integers

making sure that we initializes each element by its index and multiplied by 5 . Print the output in the console

*/

let alloateArray = (maxlength, multiplier = 5) => {
  let allotedlist = [];
  for (i = 0; i < maxlength; i++) {
    allotedlist.push(i * multiplier);
  }
  return allotedlist;
};

console.log("ANS - 1 ===> alloateArray(5)", alloateArray(5));

/* 

Question 2

1. Write a script that compares two char arrays  (letter by letter).

*/

let isSimilarString = (string1, string2) => {
  let stringArray1 = string1.split();
  let stringArray2 = string2.split();
  if (stringArray1.length == stringArray2.length) {
    for (i = 0; i < stringArray1.length; i++) {
      if (stringArray1[i] !== stringArray2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

console.log(
  "ANS - 2 ===> isSimilarString('abc','ABC')",
  isSimilarString("abc", "ABC")
);
console.log(
  "ANS - 2 ==> isSimilarString('abc','ABC')",
  isSimilarString("ABC", "ABC")
);

/* 

3. Write a script that finds the maximal sequence of equal elements in an array.

Example:

input    

2, 1, 1, 2, 3, 3, 2, 2, 2, 1 

result

2, 2, 2

*/

let getlongestSequence = sequence => {
  let getSequence = sequence;
  let allUniqueCount = {};
  for (let i = 0; i < getSequence.length; i++) {
    let num = getSequence[i];
    allUniqueCount[num] = allUniqueCount[num] ? allUniqueCount[num] + 1 : 1;
  }
  let maxCount = null;
  let maxCountElemt = null;
  let allUniqueCountKeys = Object.keys(allUniqueCount);
  for (element of allUniqueCountKeys) {
    let countOfThisElement = allUniqueCount[element];
    if (countOfThisElement > maxCount) {
      maxCount = countOfThisElement;
      maxCountElemt = element;
    }
  }
  return { element: maxCountElemt, maxCount: maxCount };
};

console.log(
  "ANS - 3 ==> getlongestSequence([1,2,3,4,3,3,3,4])",
  getlongestSequence([1, 2, 3, 4, 3, 3, 3, 4])
);

/* 

4. Write a script that finds the maximal increasing sequence in an array.

Example:

input    

3, 2, 3, 4, 2, 2, 4

result

2, 3, 4

*/

let getSortedSequence = sequence => {
  let getSequence = sequence;
  let allUniqueCount = [...new Set(getSequence)];
  return allUniqueCount.sort();
};

console.log(
  "ANS - 3 ==> getSortedSequence([1,2,3,4,3,3,3,4])",
  getSortedSequence([1, 2, 3, 4, 3, 3, 3, 4])
);
