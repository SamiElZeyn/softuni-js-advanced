function greatestDivisor(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let greatDiv = 0;
    for (let i = min; i >= 1; i--) {
        if (min % i === 0 && max % i === 0) {
            greatDiv = i;
            break;
        }
    }
    console.log(greatDiv);
}
greatestDivisor (2154, 458)