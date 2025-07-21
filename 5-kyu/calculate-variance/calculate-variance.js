const variance= arr=>{
    let result=0;
 let mean= arr.reduce((acc, curr)=>{
     let sum= acc+curr;
     return sum;
 },0)/arr.length;
 let total=0;
 for(let item of arr){
     let process= (item-mean)**2
    total+= process;
 }
  result= total/arr.length;
 return Number(result.toFixed(4));
}