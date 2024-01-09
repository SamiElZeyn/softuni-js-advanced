function processOddPositions (arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    console.log(result.map((x) => x * 2).reverse().join(" "));
}
processOddPositions ([3, 0, 10, 4, 7, 3])