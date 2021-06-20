// let s = "barfoofoobarthefoobarman"
// let words = ["bar", "foo", "the"]


let s = "barfoothefoobarman"
let words = ["foo", "bar"]

let answerDiv = document.getElementById('answer')

var findSubstring = function (s, words) {
  let result = [];
  let wordLength = words.join('').length;

  function stringGroup(i) {
    if (s.substring(i, wordLength).length == wordLength) {
      let subString = s.substring(i, wordLength).toString();
      return subString;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (stringGroup(i)) {
      let stringWord = stringGroup(i).slice(0, wordLength)
      if (stringWord.includes(words[i])) {
        result.push(stringWord)
      }
    }
  }

  answerDiv.innerHTML = result
  return result;
};


findSubstring(s, words)
