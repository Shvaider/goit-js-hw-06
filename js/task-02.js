const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(ingredient => {
  // создаём li
  const newElLi = document.createElement("li");
  // class в li
  newElLi.classList.add("item");
  // создаём h2
  const nameIngridient = document.createElement("h2");
  nameIngridient.textContent = ingredient;
  // добавляем h2 в li
  newElLi.appendChild(nameIngridient)
  // ищем ul
  const ulEl = document.querySelector('#ingredients');
  // добавляем li в ul
  ulEl.appendChild(newElLi)
  console.log(newElLi);
});





