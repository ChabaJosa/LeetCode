// 1) From: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let initialArr = s.split("");
  let notRepeatedLetters = [];
  let repeatedLetters = [];
  let lengthArr = [];
  let checkedArr = [];
  //
  initialArr.forEach((item, index) => {
    if (notRepeatedLetters.includes(item) && !repeatedLetters.includes(item)) {
      repeatedLetters.push(item);
    } else {
      notRepeatedLetters.push(item);
    }
  });
  //
  repeatedLetters.forEach((item) => {
    let letterIndex = initialArr.indexOf(item);
    initialArr.forEach((itemB, index) => {
      console.log(itemB, index);
      if (itemB === initialArr[letterIndex]) {
        if (index !== letterIndex && item === itemB) {
          console.log("Not Repeated Item and Index", itemB, index);
          console.log("Repeated Item and Index", item, letterIndex);
          console.log("Pushing -->", index, " - ", letterIndex);

          if (!checkedArr.includes(itemB)) {
            checkedArr.push(itemB);
            lengthArr.push(index - letterIndex);
          }
        }
      }
    });
  });
  //
  lengthArr.push(1);
  let finalRes = lengthArr.sort().reverse();
  console.log(repeatedLetters, notRepeatedLetters, lengthArr, finalRes);
  //
  return finalRes.length !== 0 ? finalRes[0] : 0;
};
