function sortingNums(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(arr.length / 2);
    const small = sortedArr.slice(0, middleIndex);
    const big = sortedArr.slice(middleIndex).reverse();

    let result = [];

    for (let i = 0; i < small.length; i++) {
        result.push(small[i], big[i]);
    }

    if (arr.length % 2 !== 0) {
        result.push(sortedArr[middleIndex]);
    }

    return result;
}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])