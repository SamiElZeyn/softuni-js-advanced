function townPopulation(arr) {

    const towns = {};

    for (let cityInfo of arr) {
        let [cityName, population] = cityInfo.split(" <-> ");
        population = Number(population);

        if (cityName in towns) {
            towns[cityName] += population;
        } else {
            towns[cityName] = population;
        }
    }

    let entries = Object.entries(towns);
    for (let el of entries) {
        console.log(`${el[0]} : ${el[1]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])