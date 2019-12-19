import { showByClass } from './lib.js';

const ENTER_KEY = 13;
const html = hyperHTML; // convenience rename
const newTask = document.getElementById('new-task');

const saveTasks = async taskList => {
  try {
    await localforage.setItem('taskList', taskList);
  } catch (e) {
    console.error(e);
  }
};

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

const addTask = taskList => {
  const taskListNode = document.getElementById('task-list');
  taskListNode.appendChild(taskTemplate(newTask.value));

  showByClass(['.main', '.footer']);
  updateCount();
  taskList.push(newTask.value);
  saveTasks(taskList);
  // clear input box for new tasks
  newTask.value = '';
};

const showTasks = taskList => {
  const taskListNode = document.getElementById('task-list');
  taskList.forEach(v => {
    taskListNode.appendChild(taskTemplate(v));
  });
  showByClass(['.main', '.footer']);
  updateCount();
};

const main = async () => {
  try {
    let taskList = await localforage.getItem('taskList');

    if (null === taskList) {
      // initialize it
      await localforage.setItem('taskList', []);
      taskList = await localforage.getItem('taskList');
    } else {
      showTasks(taskList);
    }

    newTask.addEventListener('keyup',
      e => (ENTER_KEY === e.keyCode) && addTask(taskList));

  } catch (e) {
    console.error(e);
  }
};

main();
