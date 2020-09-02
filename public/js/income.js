function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const ul = document.querySelector('#incomes');

fetch('/api/income').then((response) => response.json()).then((data) => {
  console.log(data);
  const incomes = data[0].Incomes;
 
  // const objIncomes = ({}, incomes);
  // console.log(objIncomes);
  return incomes.map(function (income) {
    console.log(income)
    console.log(incomes);
    const li = createNode('li');
    const span = createNode('span');
    span.innerHTML = `${income.incomeSource} ${income.total}`;
    append(li, span);
    append(ul, li);
  });
}).catch((err) => err);

document.querySelector('#incomeBtn').addEventListener('click', (event) => {
  console.log('income retrieve clicked');
  event.preventDefault();
});

// clicking add money to POST into the API
// document.querySelector('.create-form').addEventListener("submit", function (event) {
//     console.log("Add Money clicked!");
//     event.preventDefault();
//     let addedMoney = {
//         number: document.getElementById('moneyAmount').value.trim(),
//         storeMoney: document.querySelector('[name=storeMoney]:checked').value.trim()
//     };
//     // Adding the income Source which is going to be an input in html
//     let incomeSource = {
//         name: document.getElementById('').value.trim()
//     }
//     // add the API url to post into the server
//     fetch('api/income', {
//         method: 'POST',
//         body: JSON.stringify({
//             incomeSource: incomeSource,
//             total: addedMoney
//         })

//     }).then(function (response) {
//         response.json();
//     }).then(function (data) {
//         console.log("added money :", data.html_url);
//         console.log(json)
//         // location.reload()
//     }).catch(err => {
//         return err;

//     })
// })

// clicking income button to retrieve income data
