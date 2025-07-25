const decomp = n => {
   
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let multiple = p * p; multiple <= n; multiple += p) {
                isPrime[multiple] = false;
            }
        }
    }
​
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    const resultParts = [];
​
    for (let prime of primes) {
        let count = 0;
        let power = prime;
        while (power <= n) {
            count += Math.floor(n / power);
            power *= prime;
        }
​
        if (count === 1) {
            resultParts.push(`${prime}`);
        } else {
            resultParts.push(`${prime}^${count}`);
        }
    }
    return resultParts.join(" * ");
};
​
​