const categoriesList = document.getElementById("categories");
const categories = categoriesList.getElementsByClassName("item");
const numberOfCategories = categories.length;

console.log(`Number of categories: ${numberOfCategories}\n`);

for (let i = 0; i < numberOfCategories; i++) {
  const category = categories[i];
  const categoryName = category.querySelector("h2").textContent.trim();
  const elements = category.querySelectorAll("ul li");
  const numberOfElements = elements.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}\n`);
}
