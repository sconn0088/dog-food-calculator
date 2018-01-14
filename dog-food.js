var para = document.querySelector('#cups');
var buttons = document.querySelector('button');
var weight = document.querySelector('#weight');
var foodOpt;
var calories;

var foodBrands = new Map();
foodBrands.set("Blue Buffalo", "500");
foodBrands.set("Hill's", "400");
foodBrands.set("Merrick", "350");
foodBrands.set("Nature's", "200");
foodBrands.set("Nutro", "450");
foodBrands.set("Purina", "325");
foodBrands.set("Royal Canin", "425");

$("input[name='food']").on('input', function(e) {
		foodOpt = $(this).val();
		calories = foodBrands.get(foodOpt);
});

function calcWeightMain() {
	var mainWeight = Number(weight.value);
	mainWeight = 91 * (mainWeight / 2.2) ** (3/4);
	return mainWeight;
}

function calcWeightLose() {
	var loseWeight = Number(weight.value);
	loseWeight = 70 * (loseWeight / 2.2) ** (3/4);
	return loseWeight;
}

function calcWeightGain() {
	var gainWeight = Number(weight.value);
	gainWeight = 112 * (gainWeight / 2.2) ** (3/4);
	return gainWeight;
}

function calcCalories() {
	calories = Number(calories);
	return calories;
}

function adjustCups() {
	if (document.getElementById('weight_maintain').checked == true && document.getElementById('puppy_0-4').checked == true) {
		var displayCal = (calcWeightMain() / calcCalories()) * 2;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_maintain').checked == true && document.getElementById('puppy_5-10').checked == true) {
		var displayCal = (calcWeightMain() / calcCalories()) * 1.5;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_maintain').checked == true && document.getElementById('adult').checked == true) {
		var displayCal = (calcWeightMain() / calcCalories());
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_lose').checked == true && document.getElementById('puppy_0-4').checked == true) {
		var displayCal = (calcWeightLose() / calcCalories()) * 2;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_lose').checked == true && document.getElementById('puppy_5-10').checked == true) {
		var displayCal = (calcWeightLose() / calcCalories()) * 1.5;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_lose').checked == true && document.getElementById('adult').checked == true) {
		var displayCal = (calcWeightLose() / calcCalories());
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_gain').checked == true && document.getElementById('puppy_0-4').checked == true) {
		var displayCal = (calcWeightGain() / calcCalories()) * 2;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_gain').checked == true && document.getElementById('puppy_5-10').checked == true) {
		var displayCal = (calcWeightGain() / calcCalories()) * 1.5;
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
	else if (document.getElementById('weight_gain').checked == true && document.getElementById('adult').checked == true) {
		var displayCal = (calcWeightGain() / calcCalories());
		displayCal = displayCal.toFixed(2);
		para.textContent = displayCal;
	}
}

buttons.addEventListener('click', adjustCups);