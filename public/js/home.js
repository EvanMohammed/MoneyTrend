function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const incomeUl = document.querySelector('#incomes');

fetch('/api/income').then((response) => response.json()).then((data) => {
  const incomes = data[0].Incomes;
  incomes.forEach((income) => {
    const incomeSection = createNode('ul');
    for (let i = 0; i < 4; i += 1) {
      incomeSection.innerHTML = `${income.incomeSource}  : $${income.total}`;
      append(incomeUl, incomeSection);
    }
  });
}).catch((err) => {
  throw err;
});
const totalIncome = document.querySelector('#incomeSum');
fetch('/api/income/total').then((response) => response.json()).then((data) => {
  const sumIncome = data[0].total;
  const displayIncomeSum = createNode('p');
  displayIncomeSum.innerHTML = `Total : ${sumIncome}`;
  totalIncome.appendChild(displayIncomeSum);
}).catch((err) => {
  throw err;
});

const expenseSection = document.querySelector('#expenses');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  const expenseData = data[0].ExpenseCategories;
  expenseData.forEach((category) => {
    const categorySection = createNode('ul');
    for (let i = 0; i < 4; i += 1) {
      categorySection.innerHTML = `${category.categoryName}`;
      append(expenseSection, categorySection);
    }
  });
}).catch((err) => err);

const totalExpenses = document.querySelector('#sum');
fetch('/api/expenses/total').then((response) => response.json()).then((data) => {
  const sumExpenses = data[0].total;
  const displaySum = createNode('p');
  displaySum.innerHTML = `Total : ${sumExpenses}`;
  totalExpenses.appendChild(displaySum);
}).catch((err) => {
  throw err;
});

const totalBalance = document.querySelector('#balance');
Promise.all([
  fetch('/api/expenses/total'),
  fetch('/api/income/total'),
]).then((responses) => Promise.all(responses.map((response) => response.json()))).then((data) => {
  const totalExp = data[0][0].total;
  const totalInc = data[1][0].total;
  const currentBalance = totalInc - totalExp;
  const displayBalance = createNode('p');
  displayBalance.innerHTML = `Current Balance : ${currentBalance}`;
  totalBalance.appendChild(displayBalance);
}).catch((error) => error);
