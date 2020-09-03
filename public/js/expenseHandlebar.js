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

// builds drop down menu with categories and expenses

const getExpenseData = () => {
  const expenseSection = document.querySelector('.accordion');
  fetch('/api/expenses').then((response) => response.json()).then((data) => {
    const expenseData = data[0].ExpenseCategories;
    expenseData.forEach((category) => {
      const categorySection = createNode('li');
      categorySection.innerHTML = `
      <div class="link">${category.categoryName}<data-id="${category.id} aria-hidden="true"><i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">  
      <li><a> Add Item <i id="addItem" class="fa fa-plus" aria-hidden="true"></i></a></li>
      </ul>`;
      append(expenseSection, categorySection);
      category.Expenses.forEach((expense) => {
        const expenseItem = createNode('li');
        const submenu = document.querySelectorAll('.submenu:last-child')[0];
        expenseItem.innerHTML = `<a>${expense.expenseName}, $${expense.total}<i id="deleteItem" class="fa fa-minus" data-id="${expense.id}" aria-hidden="true"></i></a>`;
        submenu.appendChild(expenseItem);
      });
    });
    accordionAnimate();
  }).catch((err) => err);
};

// posting to API the expenses that the user enters

document.querySelector('#addCategory').addEventListener('click', (event) => {
  const addedCategory = document.querySelector('#categoryName').value.trim();
  event.preventDefault();
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

getExpenseData();

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
  const submenu = document.querySelectorAll('.submenu:first-child')[0];
  if (e.target && e.target.id === 'addItem') {
    submenu.innerHTML = '<input></input>';
  }
});
