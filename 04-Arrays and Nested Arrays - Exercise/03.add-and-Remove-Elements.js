function addAndRemove (arr) {

    let num = 1;
    let result = [];

    for (let command of arr) {
        if (command == 'add') {
            result.push(num)
        } else {
            result.pop();
        }
        num++
    }

    if (result.length < 1) {
        console.log('Empty');
    } else {
        console.log(result.join("\n"));
    }
}
addAndRemove (['add', 
'add', 
'remove', 
'add', 
'add'])