//const addButton = document.getElementById("add");
const spiritForm = document.getElementById("spirit-form");

const addDrink = event => {
  event.preventDefault();
  const item = document.createElement("li");
  let drink = document.getElementById("spirit-input").value;
  item.innerText = drink;
  document.getElementById("list").appendChild(item);
  document.getElementById("spirit-form").reset();
};

//addButton.addEventListener("click", addDrink);
spiritForm.addEventListener("submit", addDrink);

const randomButton = document.getElementById("random");

const randomShot = event => {
  event.preventDefault();
  const drinks = document.querySelectorAll("li");
  const drinksArray = [];
  drinks.forEach(drink => {
    drinksArray.push(drink.innerText);
  });

  const chosenDrink =
    drinksArray[Math.floor(Math.random() * Math.floor(drinksArray.length))];

  const currentP = document.getElementById("drink-selector");
  // const parentDiv = currentP.parentNode;
  // const item = document.createElement("p");
  currentP.innerText = chosenDrink;
  // parentDiv.replaceChild(item, currentP);

  console.log(drinksArray);
};

randomButton.addEventListener("click", randomShot);
