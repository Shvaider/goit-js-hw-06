'use strict';
const categoriesUl = Array.from(document.querySelector('#categories').children);
console.log(`Numbers of categories: ${categoriesUl.length}`);
for (let element of categoriesUl) {
    let category = element.firstElementChild.textContent;
    let quantityElem = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`); 
};