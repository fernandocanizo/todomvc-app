const ENTER_KEY = 13;
const html = hyperHTML;

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

const showMainSection = () => {
  const mainSection = document.querySelector('.main');
  mainSection.style.display = 'block';
};

const showFooter = () => {
  const footer = document.querySelector('.footer')
  footer.style.display = 'block';
};

const updateCount = () => {
  const todoCount = document.querySelector('.todo-count');
  const taskList = document.getElementById('task-list');

  const countTemplate = count => html(todoCount)`
<strong>${ count }</strong> ${ count > 1 ? ' items' : ' item' } left
  `;

  countTemplate(taskList.children.length);
};

const addTask = () => {
  const taskList = document.getElementById('task-list');
  taskList.appendChild(taskTemplate(newTask.value));

  showMainSection();
  showFooter();
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

