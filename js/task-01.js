const categoriesEl = document.querySelectorAll("li.item");
// console.log(categoriesEl);
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
