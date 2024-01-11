function magicMatrix (matrixInput) {
    for (let row = 0; row < matrixInput.length - 1; row++) {
        let sumRowOne = matrixInput[row].reduce((acc, el) => acc + el);
        let sumRowTwo = matrixInput[row + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let col = 0; col < matrixInput.length; col++) {
            sumColOne += matrixInput[row][col];
            sumColTwo += matrixInput[row + 1][col];
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}
magicMatrix ([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])