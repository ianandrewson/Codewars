// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

function listSquared(m, n) {
    let result = [];
    for (m; m <= n; m++){
        //find divisors
        const divisors = findDivsors(m);
        //square all divisors
        const divisorsSquared = squareDivisors(divisors);
        //sum squared divisors, see if square root
        //if true create tuple of [num, sum of squared divsors]
        if (squaredSumsIsSqrt(divisorsSquared)) {
            result.push([m, divisorsSquared.reduce((acc, curr) => acc + curr)]);
        }
    }
    return result;
}

function findDivsors(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    return result;
}

function squareDivisors(divisors){
    return divisors.map(num => num * num);
}

function squaredSumsIsSqrt(divisorsSquared) {
    const sum = divisorsSquared.reduce((acc, curr) => acc + curr);
    const sqRt = Math.round(Math.sqrt(sum));
    return sqRt * sqRt === sum; 
}

console.log(listSquared(1, 100000));

