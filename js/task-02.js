const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");

  li.classList.add("item");

  li.textContent = ingredient;

  ulIngredients.appendChild(li);
});
