function isPalindrome(str) {
  var low = str.toLowerCase();
  var alphaNum1 = [];
  var alphaNum2 = [];
  for (let i = 0; i < low.length; i++) {
    if (low[i].match(/[a-z]|[0-9]/)) {
      alphaNum1.push(low[i]);
      alphaNum2.unshift(low[i]);
    }
  }
  var alphaNumStr1 = alphaNum1.toString();
  var alphaNumStr2 = alphaNum2.toString();

  return alphaNumStr1 == alphaNumStr2;
}

