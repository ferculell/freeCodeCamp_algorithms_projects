function telephoneCheck(str) {
  var checkPhone = /^1?\s?(\d{3}|\(\d{3}\))\s?-?\s?\d{3}\s?-?\s?\d{4}$/
  return checkPhone.test(str);
}

