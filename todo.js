const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// function filterFn(toDo) {
//   return toDo.id === 1;
// }

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  toDos = cleanToDos
  saveToDos();
}

function saveToDos() { //localStorage는 모든데이터를 string으로 저장할려 하므로, toDos를 JSON화 시켜줘야함.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "✗";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); // 위에 toDos.push를 해주고 saveToDos를 해줘야함. (push를 하기전에 save하면 save할 value가 없음.)
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // input 안의 text를 초기화 해줌.
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text));
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();