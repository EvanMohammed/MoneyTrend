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
