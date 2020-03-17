// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    const checkedValues = [];
    let result;
    
    arr.forEach(num => {
        if (!checkedValues.includes(num)) {
            checkedValues.push(num);
            const newNumberCount = arr.reduce((count, numberToCount) => {
                if (numberToCount === num) {
                    return count + 1;
                } else return count;
            }, 0);
            if (newNumberCount % 2 === 1) {
                result = num;
            } 
        }
    });
    return result;
}

const reducer = (accumulator, currentValue) => {

};


module.exports = findOdd;
