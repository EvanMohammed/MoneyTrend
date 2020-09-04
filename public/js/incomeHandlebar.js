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
    const p = createNode('ul');
    for (let i = 0; i < incomes.length; i += 1) {
      p.innerHTML = `<p><a href="#" 
      style="text-decoration: none; 
      color: black">
      
      <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">${income.incomeSource}
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
            <li> Cost :  ${income.total} </li>
      </ul>
      </div></a></p>`;
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
  const addedIncomeName = document.querySelector('#incomeName').value.trim();
  const addedIncomeAmount = document.querySelector('#incomeAmount').value.trim();
  event.preventDefault();
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
