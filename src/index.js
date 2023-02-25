module.exports = function toReadable(number) {
  const digits = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  const tenOdd = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };

  const tens = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  const convertToString = number.toString();
  
  if(convertToString.length === 1) {
    return getDigits(convertToString);
  } else if(convertToString.length === 2) {
    return `${createTens(convertToString)}${addDigits(convertToString)}`;
  } else if(convertToString.length === 3) {
    return `${createHundred(convertToString)}${addDigits(convertToString.slice(1))}`;
  } else {
    return new Error("Error");
  }

  function getDigits(key) {
    const digit = digits[key];
    return digit;
  }

  function createTens(key) {
    const firstDigit = key[0];
    if (firstDigit === "1") {
      return getTenOdd(key);
    } 

    return getTens(firstDigit);
  }

  function addDigits(key) {
    const firstDigit = key[0];
    const lastDigit = key.slice(1);
    if(firstDigit > 1 && lastDigit !== "0") {
      return ` ${getDigits(lastDigit)}`;
    }

    return "";
  }

  function getTenOdd(key) {
    const tenOddNumber = tenOdd[key];
    return tenOddNumber;
  }

  function getTens(key) {
    const makeTen = tens[key];
    return makeTen;
  }

  function createHundred(num) {
    const firstNumber = num[0];
    const lastNumber = num.slice(1);

    if(lastNumber === "00") {
      return `${getDigits(firstNumber)} hundred`;
    }

    return `${getDigits(firstNumber)} hundred ${addNumber(lastNumber)}`;
  }

  function addNumber(num) {
    if(num < 10) {
      return `${getDigits(num[1])}`
    }
    return createTens(num);
  }
}

