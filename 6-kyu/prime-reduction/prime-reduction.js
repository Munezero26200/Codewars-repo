const sumOfDigit= n => {
    let digits= String(n).split("").map(Number);
    let squares= digits.map(d=>d*d);
    let sum= squares.reduce((sum,d)=> sum+d,0);
    return sum;
}
​
const reachesOne= n =>{
    if(n<0)return false;
    const seen= new Set();
    while(n !==1 && !seen.has(n)){
        seen.add(n);
        n=sumOfDigit(n);
    }
    return n===1;
}
const isPrime = n=>{
    if(n<2)return false;
    for(let i=2; i*i<=n;i++){
        if(n%i===0)return false;
    }
    return true;
}
const nextPrime= n=>{
    let candidate= n+1;
    while(!isPrime(candidate)){
        candidate++;
    }
    return candidate;
}
const solve= (low,high)=>{
    let counter=0;
    for(let i=low; i<high;i++){
        if(isPrime(i)){
            if(reachesOne(i)){
                counter++;
            }
        }
    }
    return counter;
}