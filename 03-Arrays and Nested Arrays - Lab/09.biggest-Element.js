function biggestElem(matrixInput) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    matrixInput.forEach(row => {
        row.forEach(element => {
            if (element > maxNum) {
                maxNum = element;
            }
        });
    });
    return maxNum;
}
biggestElem([[20, 50, 10],
[8, 33, 145]])