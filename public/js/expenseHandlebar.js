function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const expenseHandlebarUl = document.querySelector('.expenses');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  const expenses = data[0].ExpenseCategories;

  expenses.forEach((expense) => {
    const p = createNode('p');

    p.innerHTML = `<p><a href="#"> <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${expense.categoryName}
        <span class="caret"></span></button>
    <ul class="dropdown-menu">
 <li>${expense.Expenses[0].expenseName}</li>
    </ul>
</div></a></p>`;
    append(expenseHandlebarUl, p);
  });
  $('.dropdown-toggle').on('click touchstart', () => {
    $('.dropdown-menu').toggleClass('dropdown-menu-open');
  });
}).catch((err) => err);

// posting to API the expenses that the user enters
const categoryName = document.querySelector('#categoryName');
document.querySelector('#addExpenses').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    categoryName,
  };
  fetch('/api/expense-categories/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  });
});
// const createExpenseCategory = () => {

// };

// eslint-disable-next-line no-unused-vars

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
