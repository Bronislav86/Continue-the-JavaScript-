// 1
const elById = document.getElementById("super_link");
console.log(elById);

// 2
const allLinks = document.querySelectorAll('.card-link');
//console.log(allLinks);
allLinks.forEach(element => {
  element.textContent = 'ссылка';
});

// 3
const cardBodyEl  = document.querySelector('.card-body');
const cardLinksEls = cardBodyEl.querySelectorAll('.card-link');
console.log(cardLinksEls);

// 4
const data = document.querySelector('[data-number="50"]');
console.log(data);

// 5
const titleEl = document.querySelector('title');
console.log(titleEl.textContent);
console.log(document.title);

// 6
const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentNode);

// 7
const textEl = document.createElement('p');
const cardEl = document.querySelector('.card');

textEl.textContent = 'Привет';
cardEl.prepend(textEl);

// 8
const titleTextEl = document.querySelector('h6');
console.log(titleTextEl.textContent);
titleTextEl.remove();
