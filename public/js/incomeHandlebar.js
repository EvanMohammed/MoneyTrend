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
      p.innerHTML = `<p><a href="#"> <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">${income.incomeSource}
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
            <li> Cost :  ${income.total} </li>
      </ul>
      </div></a></p>`;
      append(incomeHandlebarUl, p);
    }
  });

  $('.dropdown-toggle').on('click touchstart', () => {
    $('.dropdown-menu').toggleClass('dropdown-menu-open');
  });
}).catch((err) => err);
