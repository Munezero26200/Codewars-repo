const reverseWords= str=> {
 let result= str.split(" ").map(val=> val.split("").reverse().join("")).join(" ");
  return result;
}