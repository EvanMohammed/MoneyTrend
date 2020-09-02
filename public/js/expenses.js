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

document.getElementById('expensesBtn').addEventListener('click', (event) => {
  console.log('expenses clicked');
  event.preventDefault();
  fetch('api/expenses', { method: 'GET' });
});
