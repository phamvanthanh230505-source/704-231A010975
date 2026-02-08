let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="editTodo(${index})">Sửa</button>
            <button onclick="deleteTodo(${index})">Xóa</button>
        `;

    list.appendChild(div);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return;

  todos.push({ text });
  saveTodos();
  renderTodos();
  input.value = "";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Sửa công việc:", todos[index].text);
  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText;
    saveTodos();
    renderTodos();
  }
}

renderTodos();
