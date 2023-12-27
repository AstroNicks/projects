document.addEventListener('DOMContentLoaded', function (){
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function () {
      const taskText = newTaskInput.value.trim ();

      if (taskText !== ''){
          addTask(taskText);
          newTaskInput.value = '';
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
        listItem.remove();
        });


        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
}); 
