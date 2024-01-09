function evenPositionEl (arr) {
    let arrNum = arr.map(Number)
    let result = [];
    for (i = 0; i < arrNum.length; i++) {

        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(" "));
}
evenPositionEl (['20', '30', '40', '50', '60'])