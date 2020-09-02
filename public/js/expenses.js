// // clicking expenses button to POST to expenses API

// document.querySelector('').addEventListener('submit', function (event) {
//     console.log('Expenses clicked');
//     event.preventDefault();
//     let addedExpenses = {
//         number: document.getElementById('').value.trim(),
//         storeMoney: document.querySelector('').value.trim()
//     }
//     let catId = {

//     }

//     fetch('api/expenses', {
//         method: 'POST',
//         body: JSON.stringify({
//             expenseName:
//             total: addedExpenses,
//             expenseCategoryId:
//         })
//     }).then(function (response) {
//         response.json();
//     }).then(function (data) {
//         console.log("added Expenses :", data.html_url);
//         console.log(json)
//         // location.reload()
//     }).catch(err => {
//         return err;

//     })
// })
// clicking expenses button to retrieve expenses data

// document.getElementById('expensesBtn').addEventListener('click', (event) => {
//   console.log('expenses clicked');
//   event.preventDefault();
//   fetch('api/expenses', { method: 'GET' });
// });
// eslint-disable-next-line no-unused-vars
const createExpenseCategory = () => {
  const data = {
    categoryName: 'shopping',
    UserId: 1,
  };
  fetch('/api/expense-categories/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  });
};

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
