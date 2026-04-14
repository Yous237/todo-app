// app.js (version initiale)
let tasks = [];
function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value) {
    tasks.push(input.value);
    input.value = '';
    render();
  }
}

function render() {
  const list = document.getElementById('taskList');
  list.innerHTML = tasks.map(t => <li>${t}</li>).join('');
}
