function calcSupply(age, maxAge, food, foodPerDay) {
    var amount = (maxAge - age) * 365 * foodPerDay;
    return amount + "kg of " + food +  " would be enough until I am " + maxAge + " years old.";
}
console.log(calcSupply(24, 60, "bananas", 0.2));
