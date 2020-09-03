$(() => {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const expenseSection = document.querySelector('.accordion');
fetch('/api/expenses').then((response) => response.json()).then((data) => {
  console.log(data)
  const expenseData = data[0].ExpenseCategories;
  expenseData.forEach((category) => {
    
    const categorySection = createNode('li');
    for (let i = 0; i < 4; i += 1) {
      categorySection.innerHTML = `
      <div class="link">${category.categoryName}<i class="fa fa-plus" data-id="${category.id} aria-hidden="true"></i><i class="fa fa-chevron-down"></i></div>
      <ul class="submenu">
        <li><a href="#">${category.Expenses[i].expenseName}, $${category.Expenses[i].total}</a><i class="fa fa-minus" data-id="${category.Expenses[i].id}" aria-hidden="true"></i></li>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
      </ul>`;
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
