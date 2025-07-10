const number2words = (num) => {
  const belowTwenty = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
​
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];
​
  if (num < 20) {
    return belowTwenty[num];
  } else if (num < 100) {
    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;
    return onesDigit === 0
      ? tens[tensDigit]
      : `${tens[tensDigit]}-${belowTwenty[onesDigit]}`;
  } else if (num < 1000) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return remainder === 0
      ? `${belowTwenty[hundreds]} hundred`
      : `${belowTwenty[hundreds]} hundred ${number2words(remainder)}`;
  } else if (num < 1000000) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    return remainder === 0
      ? `${number2words(thousands)} thousand`
      : `${number2words(thousands)} thousand ${number2words(remainder)}`;
  }
};
​