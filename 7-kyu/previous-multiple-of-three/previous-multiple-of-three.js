const prevMultOfThree = n => {
  if(n<0) return null;
  while(n>0){
      if(n % 3 ===0)return n;
      n=Math.floor(n/10);
  }
  return null;
 
}