function timeToWalk(steps, footPrint, speed) {
    let distance = steps * footPrint;
    let speedMetresPerSecond = speed / 3.6;
    let time = distance / speedMetresPerSecond;
    let breaks = Math.floor(distance / 500);

    let timeInMinutes = Math.floor((time / 60) + breaks);
    let timeInSeconds = Math.round(time % 60);
    let hours = Math.floor(timeInMinutes / 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minutesToPrint = timeInMinutes % 60 < 10 ? `0${timeInMinutes % 60}` : `${timeInMinutes % 60}`;
    let secondsToPrint = timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}
timeToWalk(2564, 0.70, 5.5)