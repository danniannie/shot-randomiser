const spiritForm = document.getElementById("spirit-form");

const addDrink = event => {
  event.preventDefault();
  if (document.querySelectorAll("p.drink").length === 0) {
    const title = document.createElement("h3");
    title.innerText = "The Bar";
    const referenceNode = document.getElementById("list");
    const parentNode = document.getElementById("the-bar");
    parentNode.insertBefore(title, referenceNode);
  }
  const item = document.createElement("p");
  item.setAttribute("class", "drink");
  let drink = document.getElementById("spirit-input").value;
  item.innerText = drink;
  document.getElementById("list").appendChild(item);
  document.getElementById("spirit-form").reset();
};

spiritForm.addEventListener("submit", addDrink);

const randomButton = document.getElementById("random");

const randomShot = event => {
  event.preventDefault();
  const drinks = document.querySelectorAll("p.drink");
  const drinksArray = [];
  drinks.forEach(drink => {
    drinksArray.push(drink.innerText);
  });

  const chosenDrink =
    drinksArray[Math.floor(Math.random() * Math.floor(drinksArray.length))];

  const currentP = document.getElementById("drink-selector");
  currentP.innerText = chosenDrink
    ? `Drink >>> ${chosenDrink}`
    : "Add a drink to be picked!";
  if (currentP.className == "selected") {
    currentP.className = "purple";
  } else {
    currentP.className = "selected";
  }
};

randomButton.addEventListener("click", randomShot);
