function squareOfStars (input) {
 let result;   
    if (typeof input === 'undefined') {
        result = "";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                result += '* ';
            }
            console.log(result);
        }
    } else {
        for (let i = 0; i < input; i++) {
            result = "";
            for (let j = 0; j < input; j++) {
                result += '* ';
            }
            console.log(result);
        }
    }
}
squareOfStars ('asd')