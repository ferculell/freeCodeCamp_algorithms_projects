function rot13Substitute(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      let char = str.charCodeAt(i) + 13;
      result += String.fromCharCode(char);
    }
    else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
      let char = str.charCodeAt(i) - 13;
      result += String.fromCharCode(char)
    }
    else {
      result += str[i];
    }
  }
  return result;
}

