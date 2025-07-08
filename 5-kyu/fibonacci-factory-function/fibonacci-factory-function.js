const genfib= ()=> {
  let a=0;
  let b=1;
  const fib= ()=>{
     let curr=a;
      a=b;
      b=a+curr;
      return curr;
  }
  return fib;
}