/* eslint-disable consistent-return */
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const incomeHandlebarUl = document.querySelector('.incomes');
fetch('/api/income').then((response) => response.json()).then((data) => {
  const incomes = data[0].Incomes;
  incomes.forEach((income) => {
    const p = createNode('p');
    for (let i = 0; i < incomes.length; i += 1) {
      p.innerHTML = `<i id="deleteIncomeSource" data-id="${income.id}" class="fa fa-minus" aria-hidden="true"></i> ${income.incomeSource}:  $${income.total}  `;
      append(incomeHandlebarUl, p);
    }
  });
}).catch((err) => err);

const totalIncome = document.querySelector('#incomeSum');
fetch('/api/income/total').then((response) => response.json()).then((data) => {
  const sumIncome = data[0].total;
  const displayIncomeSum = createNode('p');
  displayIncomeSum.innerHTML = `Total : ${sumIncome}`;
  totalIncome.appendChild(displayIncomeSum);
}).catch((err) => {
  throw err;
});

// Posting to API the Income and Income Source the User enters
document.querySelector('#addIncome').addEventListener('click', (event) => {
  event.preventDefault();
  const addedIncomeName = document.querySelector('#incomeName').value.trim();
  const addedIncomeAmount = document.querySelector('#incomeAmount').value.trim();
  if (addedIncomeName === '' || addedIncomeAmount === '') {
    return false;
  }
  const data = {
    incomeSource: addedIncomeName,
    total: addedIncomeAmount,
  };
  fetch('/api/income', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(data),
  }).then(() => window.location.reload()).catch((error) => error);
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'deleteIncomeSource') {
    const id = e.target.getAttribute('data-id');
    fetch(`/api/income/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
    }).then(() => {
      window.location.reload();
    });
  }
});
