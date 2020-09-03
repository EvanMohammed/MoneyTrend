$(document).on('click touchstart', '.dropdown-toggle', () => {
  $('.dropdown-menu').toggleClass('dropdown-menu-open');
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const expenseSection = document.querySelector('.expenses');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  const expenseData = data[0].ExpenseCategories;

  expenseData.forEach((category) => {
    const categorySection = createNode('p');
    for (let i = 0; i < 4; i += 1) {
      categorySection.innerHTML = `<p class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${category.categoryName}<span class="caret"></span></button>
      <div class="input-group plus-minus-input">
      <div class="input-group-button">
          <button type="button" class="button hollow circle add" data-id="${category.id}"
              data-field="quantity">
              <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
      </div>
      </div>
        <ul class="dropdown-menu">
          <li>${category.Expenses[i].expenseName}, $${category.Expenses[i].total}
          <div class="input-group plus-minus-input">
          <div class="input-group-button">
              <button type="button" class="button hollow circle delete" data-id="${category.Expenses[i].id}"
                  data-field="quantity">
                  <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
          </div>
          </div>
          </li>  
        </ul>
    </p>`;
      append(expenseSection, categorySection);
    }
  });
}).catch((err) => err);

// posting to API the expenses that the user enters

document.querySelector('#addCategory').addEventListener('click', (event) => {
  const addedCategory = document.querySelector('#categoryName').value.trim();
  event.preventDefault();
  console.log('clicked');
  const data = {
    categoryName: addedCategory,
  };
  console.log(data);
  fetch('/api/expense-categories', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

    },

    body: JSON.stringify(data),
  }).then((response) => response.json()).catch((error) => error);
});
