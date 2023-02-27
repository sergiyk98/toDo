const input = document.querySelector('#input'),
   btn = document.querySelector('#todo__button'),
   toDoList = document.querySelector('.todo__list');


btn.addEventListener('click', toDoClickHandler);

let arr = [];

function toDoClickHandler(event) {
   let val = input.value;
   arr.push(val);
   input.value = '';

   addToDo();
}

function addToDo() {
   let value = '';

   for (let item of arr) {
      value = item;
   }

   toDoList.innerHTML += `
      <li class="todo__list-item">${value}<span class="delete">&times;</span></li>
   `;
}

toDoList.addEventListener('click', function(event) {
   if (event.target.classList.contains("delete")) {
      event.target.parentNode.remove();
    }
});