function smallestTwoNums (arr) {

    let sorted = arr.sort((a, b) => a - b);
    let smallestTwo = sorted.slice(0, 2);
    console.log(smallestTwo.join(" "));

} 
smallestTwoNums ([3, 0, 10, 4, 7, 3])