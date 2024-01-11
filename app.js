let display = document.getElementById('display');

        function appendNumber(number) {
            display.value += number;
        }

        function appendOperation(operation) {
            display.value += operation;
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }   

        function reset() {
            display.value = '';
        }








const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Пожалуйста, введите задание!");
        return;
    }

    const row = taskList.insertRow(-1);

    const taskCell = row.insertCell(0);
    taskCell.innerHTML = taskInput.value;

    const actionCell = row.insertCell(1);
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    completeButton.innerHTML = "Завершить";
    completeButton.classList.add("completeButton");
    completeButton.onclick = () => {
    taskCell.classList.toggle("completedTask");
    };

    deleteButton.innerHTML = "Удалить";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = () => {
    row.parentNode.removeChild(row);
    };

    actionCell.appendChild(completeButton);
    actionCell.appendChild(deleteButton);

    taskInput.value = "";
};

