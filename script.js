//your JS code here. If required.
//your JS code here. If required.
const searchDiv = document.querySelector('.search');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  searchDiv.classList.add('active');
  input.focus();
});
