const categories = document.querySelector("#categories");
console.log(`В списку ${categories.children.length} категорії`);

const categoriesRef = document.querySelectorAll("li.item");
categoriesRef.forEach((category) => {
  console.log(`- Категорія: ${category.firstElementChild.textContent}`);
  console.log(
    ` - Кількість елементів: ${category.lastElementChild.children.length}`
  );
});
