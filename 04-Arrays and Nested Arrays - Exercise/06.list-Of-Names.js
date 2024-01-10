function listOfNames (arr) {
    num = 1;

    arr.sort((a, b) => a.localeCompare(b))
    arr.forEach(element => {
        console.log(`${num}.${element}`);
        num++;
    });
}

listOfNames (["John", "Bob", "Christina", "Ema"])