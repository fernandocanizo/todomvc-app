import { showByClass } from './lib.js';

const ENTER_KEY = 13;
const html = hyperHTML;
const taskList = localStorage.taskList ?
  localStorage.taskList : [];
const newTask = document.getElementById('new-task');

const taskTemplate = task => html`
<li>
  <div class="view">
    <input type="checkbox" class="toggle">
    <label>${ task }</label>

    <button class="destroy"></button>
  </div>
  <input type="text" class="edit" value="${ task }">
</li>
`;

const updateCount = () => {
  const todoCount = document.querySelector('.todo-count');
  const taskListNode = document.getElementById('task-list');

  const countTemplate = count => html(todoCount)`
<strong>${ count }</strong> ${ count > 1 ? ' items' : ' item' } left
  `;

  countTemplate(taskListNode.children.length);
};

const addTask = () => {
  const taskListNode = document.getElementById('task-list');
  taskListNode.appendChild(taskTemplate(newTask.value));

  showByClass(['.main', '.footer']);
  updateCount();
  // clear input box for new tasks
  newTask.value = '';
};

newTask.addEventListener('keyup', e => {
  if (ENTER_KEY === e.keyCode) {
    console.log(newTask.value);
    addTask();
  }
});

