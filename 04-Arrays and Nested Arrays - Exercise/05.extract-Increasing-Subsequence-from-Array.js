function solve (arr) {
    let maxNum = arr[0];
    let result = [];

    for (let num of arr) {
        if (num >= maxNum) {
            maxNum = num;
            result.push(num)
        }
    }
    return result;
}
solve ([1, 3, 8, 4, 10, 12, 3, 2, 24])