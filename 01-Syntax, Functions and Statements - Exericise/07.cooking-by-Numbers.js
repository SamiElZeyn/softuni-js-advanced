function cooking(start, com1, com2, com3, com4, com5) {

    start = Number(start);
    let commandArr = com1 + " " + com2 + " " + com3 + " " + com4 + " " + com5;
    commandArr = commandArr.split(" ");

    for (let command of commandArr) {
        switch (command) {
            case 'chop': start /= 2; break;
            case 'dice': start = Math.sqrt(start); break;
            case 'spice': start += 1; break;
            case 'bake': start *= 3; break;
            case 'fillet': start = start - (start * 0.2); break;
        }

        console.log(start);
    }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')