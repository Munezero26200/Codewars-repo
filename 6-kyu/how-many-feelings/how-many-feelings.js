const countFeelings= (string, array) =>{
  let count= 0;
  for(let word of array){
     let canform= true;
    for(let char of word){
     if(!string.includes(char)){
      canform=false;
       break;
     }
    }
    if(canform){
      count++;
    }
  }
  if(count===1){
    return `1 feeling.`;
​
  }else{
    return `${count} feelings.`
  }
  
};