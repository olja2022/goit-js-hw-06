const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const vegetablesList = ingredients.map((vegetable) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = vegetable;
  return listEl;
});

ingredientsEl.append(...vegetablesList);
