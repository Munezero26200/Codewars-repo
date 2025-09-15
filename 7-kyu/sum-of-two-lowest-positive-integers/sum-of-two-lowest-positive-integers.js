const sumTwoSmallestNumbers= arrNum=> {  
 let sortNum= arrNum.sort((a,b)=> a-b);
 let result= arrNum[0]+ arrNum[1];
   return result;
}