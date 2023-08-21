// Solution causing performance issues
function solution(inputArray, k) {
    let sum = result = inputArray.slice(0, k).reduce((x, y) => x + y);
    
    for (let i = 1; i < inputArray.length; i++) {
        sum = inputArray.slice(i, (k + i).reduce((x, y) => x + y);
        if (sum > result) result = sum;
    }
    return result;
}

// Solution #1 avoiding performance issues
function solution(inputArray, k) {
    let sum = result = inputArray.slice(0, k).reduce((x, y) => x + y);
    
    for (let i = k; i < inputArray.length; i++) {
        sum = (sum - inputArray[i - k]) + inputArray[i];
        if (sum > result) result = sum;
    }
    return result;
}

// Solution #2 avoiding performance issues
function solution(inputArray, k) {
    let sum = result = inputArray.slice(0, k).reduce((x, y) => x + y);
    
    for (let i = 1; i < inputArray.length; i++) {
        sum = (sum - inputArray[i - 1]) + inputArray[(k + i) - 1];
        if (sum > result) result = sum;
    }
    return result;
}
