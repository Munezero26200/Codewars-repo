const allNonConsecutive = (arr) => {
if (arr.length===0 || arr.length==1)return [];
let result= [];
for(let i=1; i< arr.length; i++){
    if(arr[i]!== arr[i-1]+1){
        let unconsecNum= {i: i, n:arr[i]};
        result.push(unconsecNum);
    }
}
return result;
}