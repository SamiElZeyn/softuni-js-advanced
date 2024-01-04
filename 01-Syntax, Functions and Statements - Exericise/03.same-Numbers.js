function sameNums(num) {
    let numArr = num.toString().split("").map(Number);
    let sum = 0;
    let hasTheSameInts = true;
    
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
        
        if (i < numArr.length - 1) {
            let curNum = numArr[i];
            let nextNum = numArr[i + 1];
            
            if (curNum !== nextNum) {
                hasTheSameInts = false;
            }
        }
    }
    
    console.log(hasTheSameInts);
    console.log(sum);
}
sameNums (2222222)