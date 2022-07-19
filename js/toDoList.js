
/*Declaración de las constantes y relacionandolas con HTML*/

const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const submitForm2 = document.querySelector(".add2");
const addButton2 = document.querySelector(".add-todo2");
const todoList2 = document.querySelector(".todos2");
const list2 = document.querySelectorAll(".todos2 li");

const lang = navigator.language;

let date = new Date();

let dayName = date.toLocaleString(lang, {
  weekday: "long"
});

/*arrays - variable de bloque*/
let listLenght = list.lenght;
let listLenght1 = list.lenght;

/*Recorriendo los datos del las Listas de Tareas*/
const generateTempalate = (todo) => {
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="fas fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html;
};

const generateTempalate2 = (todo2) => {
    const html = `<li>
                    <input type="checkbox" id="todo_${listLenght1}-${listLenght1}">
                    <label for="todo_${listLenght1}-${listLenght1}">
                      <span class="check"></span>
                      ${todo2}
                    </label>
                    <i class="fas fa-trash-alt delete"></i>
                  </li>`;
    todoList2.innerHTML += html;
};

/*Función que añade visualmente nuevas tareas*/
function addTodos(e) 
{
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

/*Función que añade visualmente nuevas tareas*/
function addTodos2(e) {
    e.preventDefault();
    const todo2 = submitForm2.add.value.trim();
    if (todo2.length) {
      listLenght1 = listLenght1 + 1;
      generateTempalate2(todo2);
      submitForm2.reset();
    }
  }

/*Añadiendo los datos a los arreglos*/
submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);
submitForm2.addEventListener("submit", addTodos2);
addButton2.addEventListener("click", addTodos2);

/*Función que elimina los datos de los arreglos*/
function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

/*Eliminando los datos de los arreglos*/
todoList.addEventListener("click", deleteTodos);
todoList2.addEventListener("click", deleteTodos);