const orderWeight= strng=> {
    let numStr= strng.trim().split(/\s+/);
    const digitSum = str => {
  return str.split('').reduce((sum, digit) => {
    return sum + Number(digit);
  }, 0);
};
numStr.sort((a,b)=>{
    let weightA= digitSum(a);
    let weightB= digitSum(b);
    if(weightA === weightB){
        return a.localeCompare(b);
    }else{
        return weightA-weightB;
    }
})
    return numStr.join(" ");
}