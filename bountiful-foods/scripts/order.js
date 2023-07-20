const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitsData() {
  const response = await fetch(url);
  const data = await response.json();
  outputOrder(data);
}

const orderButton = document.querySelector("#submit");

orderButton.addEventListener("click", getFruitsData);

function outputOrder(drinks) {
  //order form info
  const name = document.querySelector("#order-name");
  const email = document.querySelector("#order-email");
  const phone = document.querySelector("#order-phone");
  const fruits = document.querySelector("#order-fruits");
  const outputFirstFruit = document.querySelector("#order-fruit1");
  const outputSecondFruit = document.querySelector("#order-fruit2");
  const outputThirdFruit = document.querySelector("#order-fruit3");
  const instructions = document.querySelector("#order-instructions");

  //nutrition information
  const fat = document.querySelector("#order-fat");
  const protein = document.querySelector("#order-protein");
  const carbohydrates = document.querySelector("#order-carbohydrates");
  const sugar = document.querySelector("#order-sugar");
  const calories = document.querySelector("#order-calories");

  //customer inputs
  const inputName = document.querySelector("#firstName").value;
  const inputEmail = document.querySelector("#email").value;
  const inputPhone = document.querySelector("#phone").value;
  const inputInstructions = document.querySelector("#instructions").value;
  const inputFirstFruit = document.querySelector("#fruit1").value;
  const inputSecondFruit = document.querySelector("#fruit2").value;
  const inputThirdFruit = document.querySelector("#fruit3").value;

  //set values to zero
  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  drinks.forEach((fruit) => {
    if (inputFirstFruit != "") {
      if (fruit.name == inputFirstFruit) {
        outputFirstFruit.innerHTML = `Fruits: <strong>${fruit.name}</strong>`;
        totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCalories += parseInt(fruit.nutritions.calories);
      }
    }
    if (inputSecondFruit != "") {
      if (fruit.name == inputSecondFruit) {
        outputSecondFruit.innerHTML = `, <strong>${fruit.name}</strong>`;
        totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCalories += parseInt(fruit.nutritions.calories);
      }
    }
    if (inputThirdFruit != "") {
      if (fruit.name == inputThirdFruit) {
        outputThirdFruit.innerHTML = `, <strong>${fruit.name}</strong>`;
        totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
        totalProtein += parseFloat(fruit.nutritions.protein);
        totalFat += parseFloat(fruit.nutritions.fat);
        totalSugar += parseFloat(fruit.nutritions.sugar);
        totalCalories += parseInt(fruit.nutritions.calories);
      }
    }
  });
  if (
    inputFirstFruit != "" &&
    inputName != "" &&
    inputEmail != "" &&
    inputPhone != ""
  ) {
    carbohydrates.innerHTML = `Total Carbohydrates: <strong>${totalCarbohydrates.toFixed(
      1
    )}</strong>`;
    protein.innerHTML = `Total Protein: <strong>${totalProtein.toFixed(
      1
    )}</strong>`;
    fat.innerHTML = `Total Fat: <strong>${totalFat.toFixed(1)}</strong>`;
    sugar.innerHTML = `Total Sugar: <strong>${totalSugar.toFixed(1)}</strong>`;
    calories.innerHTML = `Total Calories: <strong>${totalCalories}</strong>`;
  }
  document.querySelector(".nutrition").style.display = "block";
}

document.querySelector("#submit").addEventListener("click", countOrder);

function countOrder() {
  let orderStorage = localStorage.getItem("numberOfDrinks");
  console.log(orderStorage);
  if (orderStorage === null) {
    let value = 1;
    document.querySelector(".drink-stats").textContent = value;
    localStorage.setItem("numberOfDrinks", value);
  } else {
    let toInt = parseInt(orderStorage);
    toInt += 1;
    localStorage.setItem("numberOfDrinks", toInt);
  }
}
