const stringExpansion= str => {
let result= "";
 let repeatCount=1;
  for(let char of str){
      if(!isNaN(char)){
          repeatCount= Number(char);
      }else{
          result +=char.repeat(repeatCount);
      }
  }
  return result;
}