var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

var Order = function(plates) {
	this.plates = plates;
};

var Menu = function(plates) {
	this.plates = plates;
};

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};

FoodItem.prototype.toString = function() {
	var menuItem = ("Ingredient: " + this.name);
	var caloriesValue = ("Calories: " + this.calories);
	var isVegan = ("Vegan: " + this.vegan);
	var isGlutenFree = ("Gluten free: " + this.glutenFree);
	var isCitrusFree = ("Citrus free: " + this.citrusFree);
	return [menuItem, caloriesValue, isVegan, isGlutenFree,isCitrusFree].join("\n");
};

Plate.prototype.toString = function() {
	var name = ("Plate: " + this.name);
	var description = ("Description: " + this.description);
	var price = ("Price: " + this.price);
	var ingredients = this.ingredients.map(function(ingredient) {
		return ingredient.toString();

	});
	ingredients = ingredients.join("\n");
	return [name, description, price, ingredients].join("\n");
};

Order.prototype.toString = function() {
	var wholeOrder = this.plates;
	var allPlates = [];
	for (var i = 0; i < wholeOrder.length; i++) {
		var currentItem = wholeOrder[i].toString();
		allPlates.push(currentItem);
	}
	return allPlates.join("\n");
};

Menu.prototype.toString = function() {
	var wholeMenu = this.plates;
	var allPlates = [];
	for (var i = 0; i < wholeMenu.length; i++) {
		var currentItem = wholeMenu[i].toString();
		allPlates.push(currentItem);
	}
	return allPlates.join("\n");
};

Customer.prototype.toString = function() {
	return this.dietaryPreference;
};

Plate.prototype.isVegan = function() {
	var ingredients = this.ingredients;
	for (var i = 0; i < ingredients.length; i++) {
		if (ingredients[i].vegan === true) {
		} else {
			return false;
		}
	}
	return true;
};

Plate.prototype.isGlutenFree = function() {
	var ingredients = this.ingredients;
	for (var i = 0; i < ingredients.length; i++) {
		if (ingredients[i].glutenFree === true) {
		} else {
			return false;
		}
	}
	return true;
};

Plate.prototype.isCitrusFree = function() {
	var ingredients = this.ingredients;
	for (var i = 0; i < ingredients.length; i++) {
		if (ingredients[i].glutenFree === true) {
		} else {
			return false;
		}
	}
	return true;
};


var checkProp = function(propName) {
	var ingredients = this.ingredients;
	for (var i = 0; i < ingredients.length; i++) {
		if (ingredients[i][propName]=== true) {
		} else {
			return false;
		}
	}
	return true;
};

Plate.protoptype.citrusFree = function () {
	return checkProp("citrusFree");
}


var burger = new FoodItem("burger", 600, false, false, true);
var salad = new FoodItem("salad", 250, true, true, true);
var pizza = new FoodItem("pizza", 500, false, false, true);
var lunchSpecial = new Plate("Lunch Special", "lasagne", "$12.00", [salad]);
var newOrder = new Order([lunchSpecial, lunchSpecial]);

console.log(lunchSpecial.isVegan());








$(document).on('ready', function() {
  
});