// let list = [{
//     task: "",
//     status: false
// }];

// let newTask = document.querySelector("#new-task").value;
// let taskList = document.querySelector("#task-list");

// function addTask() {
//     let task = newTask;
//     list.push({
//         task: task,
//         status: false
//     })
// }
// function filterTasks(filterType) {
//     if (filterType === "all") {

//     }
//     else if (filterType === "active") {

//     }
//     else {

//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
        if (newTaskInput.value.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="task-content">${newTaskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
            <button class="complete-btn" onclick="toggleComplete(this)"><i class="fas fa-check"></i></button>
        `;

        taskList.appendChild(taskItem);
        newTaskInput.value = ''; // Clear the input after adding
    }

    window.addTask = addTask; // Expose function to global scope for HTML access

    window.deleteTask = function(button) {
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    };

    window.toggleComplete = function(button) {
        const taskItem = button.parentNode;
        const taskContent = taskItem.querySelector('.task-content');
        taskContent.classList.toggle('completed');
    };

    window.filterTasks = function(filter) {
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => {
            const isCompleted = task.querySelector('.task-content').classList.contains('completed');
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'active':
                    if (isCompleted) {
                        task.style.display = 'none';
                    } else {
                        task.style.display = '';
                    }
                    break;
                case 'completed':
                    if (isCompleted) {
                        task.style.display = '';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
            }
        });
    };
});
