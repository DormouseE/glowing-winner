'use strict';

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_BIG = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);

function Hamburger(size, stuffing) {
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price;
    this.calories += topping.calories;
}

Hamburger.prototype.removeTopping = function (topping) {
    this.price -= topping.price;
    this.calories -= topping.calories;
}

Hamburger.prototype.calculatePrice = function () { return this.price; }

Hamburger.prototype.calculateCalories = function () { return this.calories; }



console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Price: " + hamburger.calculatePrice());

console.log(hamburger)

