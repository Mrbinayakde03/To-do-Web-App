function addTask() {
    const taskText = document.getElementById('task').value.trim();
    const dateTime = document.getElementById('datetime').value;
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} - ${dateTime}</span>
        <button onclick="completeTask(this)">✔</button>
        <button onclick="editTask(this)">✎</button>
        <button onclick="deleteTask(this)">✖</button>
    `;
    document.getElementById('taskList').appendChild(li);

    document.getElementById('task').value = '';
    document.getElementById('datetime').value = '';
}

function completeTask(btn) {
    const li = btn.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(btn) {
    const li = btn.parentElement;
    li.remove();
}

function editTask(btn) {
    const li = btn.parentElement;
    const text = li.querySelector('span').innerText.split(' - ')[0];
    const datetime = li.querySelector('span').innerText.split(' - ')[1];

    document.getElementById('task').value = text;
    document.getElementById('datetime').value = datetime;
    li.remove();
}