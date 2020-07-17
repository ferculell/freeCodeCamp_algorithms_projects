function checkCashRegister(price, cash, cid) {

  // Example of arguments required: checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


  var change = [];
  var result = {
    "status": "",
    "change": change 
  }

  // In order to avoid floating point precision issues, we will work internally with cents. So, we previously multiply for 100, do the computation, and then we divide by 100 to get the correct result.

  var dif = (cash - price) * 100;
  var values = [1, 5, 10, 25, 100, 500, 1000, 2000,10000]
  var totalCash = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCash += (cid[i][1] * 100);
  }

  if (dif > totalCash) {
    result.status = "INSUFFICIENT_FUNDS";

    return result;
  }

  else if (dif == totalCash) {
    result.status = "CLOSED";
    result.change = cid;

    return result;
  }

  else {
    for (let i = cid.length; i >= 0; i--) {
      if (dif >= values[i]) {
        var cache = 0;
        let parcialAmount = Math.floor(dif / values[i]) * values[i];
        if (parcialAmount < cid[i][1] * 100) {
          cache += parcialAmount;
          dif -= parcialAmount;
          change.push([cid[i][0], parcialAmount / 100]);
        }
        else {
          cache += cid[i][1] * 100;
          dif -= cid[i][1] * 100;
          change.push(cid[i]);
        }
      }
    }
    if (cache < dif) {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
      return result;
    }
    else {
      result.status = "OPEN";
      return result;
    }
  }
}

