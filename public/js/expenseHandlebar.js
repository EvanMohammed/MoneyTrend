/* eslint-disable consistent-return */
// controls dropdown menu behavior
const accordionAnimate = () => {
  const Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    const links = this.el.find('.link');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    const $el = e.data.el;
    const $this = $(this);
    const $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent()
        .removeClass('open');
    }
  };
  // eslint-disable-next-line no-unused-vars
  const accordion = new Accordion($('#accordion'), false);
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const initAddExpenseBtn = () => {
  document.querySelectorAll('.addExpense').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryId = e.target.getAttribute('data-id');
      const newExpenseName = document.getElementById(`expenseName${categoryId}`).value.trim();
      const expenseTotal = document.getElementById(`expenseTotal${categoryId}`).value.trim();
      if (newExpenseName === '' || expenseTotal === '') {
        return false;
      }
      const newItem = {
        expenseName: newExpenseName,
        total: parseInt(expenseTotal, 10),
        ExpenseCategoryId: parseInt(categoryId, 10),
      };
      fetch('/api/expense-items/', {
        method: 'post',
        body: JSON.stringify(newItem),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        window.location.reload();
      });
    });
  });
};

// builds drop down menu with categories and expenses
const getExpenseData = () => {
  const expenseSection = document.querySelector('.accordion');
  fetch('/api/expenses').then((response) => response.json()).then((data) => {
    const expenseData = data[0].ExpenseCategories;
    expenseData.forEach((category) => {
      const categorySection = createNode('li');
      categorySection.innerHTML = `
      <div class="link">${category.categoryName}<i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">  
      <li><a> Add Item <i id="addItem" data-id="${category.id}" class="fa fa-plus" aria-hidden="true"></i></a></li>
      <li id="textarea${category.id}" style="display:none">
      <label for="expenseName">Expense Name:</label>
      <br>
      <input class="form-control" id="expenseName${category.id}" required/>
      <br>
      <label for="expenseTotal">Cost:</label>
      <br>
      <input class="form-control" id="expenseTotal${category.id}" required/>
      <br>
      <button class="btn-default" data-id="${category.id}" class="addExpense">Submit</button>
      </li>
      </ul>`;
      append(expenseSection, categorySection);
      category.Expenses.forEach((expense) => {
        const expenseItem = createNode('li');
        const submenu = document.querySelectorAll('.submenu:last-child')[0];
        expenseItem.innerHTML = `<a>${expense.expenseName}, $${expense.total}<i id="deleteItem" class="fa fa-minus" data-id="${expense.id}" aria-hidden="true"></i></a>`;
        submenu.appendChild(expenseItem);
      });
    });
    initAddExpenseBtn();
    accordionAnimate();
  }).catch((err) => err);
};

// posting to API the expenses that the user enters

document.querySelector('#addCategory').addEventListener('click', (event) => {
  event.preventDefault();
  const addedCategory = document.querySelector('#categoryName').value.trim();
  if (addedCategory === '') {
    return false;
  }
  const data = {
    categoryName: addedCategory,
  };
  fetch('/api/expense-categories', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => window.location.reload()).catch((error) => error);
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'deleteItem') {
    const id = e.target.getAttribute('data-id');
    fetch(`/api/expense-items/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
    }).then(() => {
      window.location.reload();
    });
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'addItem') {
    const id = e.target.getAttribute('data-id');
    const textInput = document.getElementById(`textarea${id}`);
    textInput.style.display = 'block';
  }
});

getExpenseData();
