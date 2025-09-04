const countMe= strNum=> {
  if(typeof strNum !== "string")return "";
  strNum = strNum.trim();
  if(strNum.length===0)return "";
  if(!/^\d+$/.test(strNum)) return "";
  
 let result="";
 for(let i=0; i< strNum.length;){
     const digit= strNum[i];
     let count=1;
     i++;
     while(i<strNum.length && strNum[i] ===digit){
         count++;
         i++
     }
     result += count + digit;
 }
 return result;
}