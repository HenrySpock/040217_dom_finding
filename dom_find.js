
// 1. Select the section with an id of 'container' without using querySelector.
let container1 = document.getElementById('container');
// 2. Select the section with an id of 'container' using querySelector. 
let container2 = document.querySelector('#container');
// 3. Select all of the list items with a class of 'second'. 
let secondListItems = document.querySelectorAll('.second');
// 4. Select a list item with a class of 'third', but only the list item inside of the ol tag. 
let thirdListItem = document.querySelector('ol .third');
// 5. Give the section with an id of 'container' the text "Hello!". 
let container3 = document.querySelector('#container');
container3.textContent = 'Hello!';
// 6. Add the class 'main' to the div with a class of footer. 
let footer = document.querySelector('.footer');
footer.classList.add('main');
// 7. Remove the class 'main' on the div with a class of footer. 
footer.classList.remove('main');
// 8. Create a new li Element. 
let newLi = document.createElement('li');
// 9. Give the li the text 'four'. 
newLi.textContent = 'four';
// 10. Append the li to the ul Element. 
let ul = document.querySelector('ul');
ul.appendChild(newLi);
// 11. Loop over all of the lis inside the ol tag and give them a background color of 'green'. 
let olLis = document.querySelectorAll('ol li');
for (let i = 0; i < olLis.length; i++) {
  olLis[i].style.backgroundColor = 'green';
}
// 12. Remove the div with a class of 'footer'.
let footer = document.querySelector('.footer');
footer.remove();