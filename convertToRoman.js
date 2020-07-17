function convertToRoman(num) {
  var result = "";
  
  var thous = Math.floor(num / 1000);
  var thousRem = num % 1000;
  var hund = Math.floor(thousRem / 100);
  var hundRem = thousRem % 100;
  var ten = Math.floor(hundRem / 10);
  var tenRem = hundRem % 10;

  if (thous > 0) {
    result += "M".repeat(thous);
  }

  if (hund >0 && hund < 4) {
    result += "C".repeat(hund);
  }
  else if (hund == 4) {
    result += "CD";
  }
  else if (hund == 5) {
    result += "D";
  }
  else if (hund == 6) {
    result += "DC";
  }
  else if (hund == 7) {
    result += "DCC";
  }
  else if (hund == 8) {
    result += "DCCC";
  }
  else if (hund == 9) {
    result += "CM";
  }

  if (ten >0 && ten < 4) {
    result += "X".repeat(ten);
  }
  else if (ten == 4) {
    result += "XL";
  }
  else if (ten == 5) {
    result += "L";
  }
  else if (ten == 6) {
    result += "LX";
  }
  else if (ten == 7) {
    result += "LXX";
  }
  else if (ten == 8) {
    result += "LXXX";
  }
  else if (ten == 9) {
    result += "XC";
  }

  if (tenRem >0 && tenRem < 4) {
    result += "I".repeat(tenRem);
  }
  else if (tenRem == 4) {
    result += "IV";
  }
  else if (tenRem == 5) {
    result += "V";
  }
  else if (tenRem == 6) {
    result += "VI";
  }
  else if (tenRem == 7) {
    result += "VII";
  }
  else if (tenRem == 8) {
    result += "VIII";
  }
  else if (tenRem == 9) {
    result += "IX";
  }


  return result;
}

