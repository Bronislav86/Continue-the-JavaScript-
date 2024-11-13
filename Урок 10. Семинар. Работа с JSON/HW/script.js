'use strict';

console.log(data);

const ulEl = document.querySelector('.product-list');

data.forEach(element => {
  
  const productEl = document.createElement('li');
  productEl.classList.add("product-Box");

  const imgEl = document.createElement('img');
  imgEl.classList.add("product-Box__img");
  imgEl.src = element.image;
  imgEl.alt = 'product photo';

  const titleEl = document.createElement('h2');
  titleEl.classList.add("product-Box__title");
  titleEl.textContent = element.title;

  const descriptionEl = document.createElement('p');
  descriptionEl.classList.add("product-Box__desc");
  descriptionEl.textContent = element.description;

  const priceEl = document.createElement('p');
  priceEl.classList.add("product-Box__price");
  priceEl.textContent = element.price;

  const buttonAdd = document.createElement('button');
  buttonAdd.classList.add('product-Box__BtnAdd');
  buttonAdd.setAttribute('data-id', element.id);
  buttonAdd.textContent = 'Add to Cart';

  ulEl.appendChild(productEl);
  productEl.appendChild(imgEl);
  productEl.appendChild(titleEl);
  productEl.appendChild(descriptionEl);
  productEl.appendChild(priceEl);
  productEl.appendChild(buttonAdd);

});
