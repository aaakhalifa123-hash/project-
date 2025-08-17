function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("op").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "من فضلك ادخل أرقام صحيحة!";
  } else {
    if (op === "+") result = num1 + num2;
    else if (op === "-") result = num1 - num2;
    else if (op === "*") result = num1 * num2;
    else if (op === "/") {
      if (num2 !== 0) result = num1 / num2;
      else result = "خطأ: قسمة على صفر!";
    }
  }

  document.getElementById("result").innerText = "الناتج = " + result;
}