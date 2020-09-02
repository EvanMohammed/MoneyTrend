// clicking expenses button to retrieve expenses data
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const expenseUl = document.querySelector('#expenses');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  const expneses = data[0].ExpenseCategories;
  expneses.forEach((expense) => {
    const p = createNode('p');
    for (let i = 0; i < 4; i += 1) {
      p.innerHTML = `Expense Category : ${expense.categoryName}  Expense Detail: ${expense.Expenses[i].expenseName} --- ${expense.Expenses[i].total}`;
      append(expenseUl, p);
    }
  });
}).catch((err) => err);

// const createExpenseCategory = () => {
//   const data = {
//     categoryName: 'shopping',
//     UserId: 1,
//   };
//   fetch('/api/expense-categories/', {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',

//     },
//     body: JSON.stringify(data),
//   });
// };

// eslint-disable-next-line no-unused-vars
const createExpenseItem = () => {
  const data = {
    expenseName: 'shopping',
    total: 100,
    ExpenseCategoryId: 1,
  };
  fetch('/api/expense-items/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  });
};

// eslint-disable-next-line no-unused-vars
const createIncome = () => {
  const data = {
    incomeSource: 'shopping',
    total: 100,
    UserId: 1,
  };
  fetch('/api/expense-items/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  });
};
