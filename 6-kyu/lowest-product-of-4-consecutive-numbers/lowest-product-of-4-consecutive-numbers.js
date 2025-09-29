function lowestProduct(input) { 
  if (input.length < 4) return "Number is too small";
​
  let minProduct = Infinity;
​
  for (let i = 0; i <= input.length - 4; i++) {
    let combStr = input.slice(i, i + 4);
    let combNum = combStr.split("").map(Number);
    let product = combNum.reduce((acc, num) => acc * num, 1);
​
    if (product < minProduct) minProduct = product;  
  }
​
  return minProduct;  
}
​
​