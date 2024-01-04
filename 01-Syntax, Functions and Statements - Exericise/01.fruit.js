function fruit (fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let neededMoney = pricePerKg * weightInKg;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
fruit ('orange', 2500, 1.80)