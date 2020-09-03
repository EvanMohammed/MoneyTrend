function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const incomeUl = document.querySelector('#incomes');

fetch('/api/income').then((response) => response.json()).then((data) => {
  const incomes = data[0].Incomes;

  // displays each income to page
  incomes.forEach((income) => {
    const p = createNode('p');
    p.innerHTML = `${income.incomeSource} ${income.total}`;
    append(incomeUl, p);
  });
}).catch((err) => {
  throw err;
});

const expenseSection = document.querySelector('#expenses');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  console.log(data);
  const expenseData = data[0].ExpenseCategories;
  expenseData.forEach((category) => {
    const categorySection = createNode('ul');
      categorySection.innerHTML = `${category.categoryName}`;
      append(expenseSection, categorySection);
  });
}).catch((err) => err);
