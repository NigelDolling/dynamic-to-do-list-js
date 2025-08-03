// Wait for the HTML document to fully load before running JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            
            // Select DOM elements and store them in constants
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
            
            // Function to add a new task to the list
            function addTask() {
                // Get the text from input field and remove extra spaces
                const taskText = taskInput.value.trim();
                
                // Check if the input is not empty
                if (taskText === "") {
                    alert("Please enter a task!");
                    return; // Exit the function if input is empty
                }
                
                // Create a new list item element
                const listItem = document.createElement('li');
                listItem.textContent = taskText;
                
                // Create a remove button for this task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn');
                
                // Add click event to remove button to delete the task
                removeButton.onclick = function() {
                    taskList.removeChild(listItem);
                };
                
                // Add the remove button to the list item
                listItem.appendChild(removeButton);
                
                // Add the complete list item to the task list
                taskList.appendChild(listItem);
                
                // Clear the input field for next task
                taskInput.value = "";
            }
            
            // Add click event listener to the "Add Task" button
            addButton.addEventListener('click', addTask);
            
            // Add keypress event listener to input field for Enter key
            taskInput.addEventListener('keypress', function(event) {
                // Check if the pressed key is Enter
                if (event.key === 'Enter') {
                    addTask(); // Call addTask function
                }
            });
            
        }); // End of DOMContentLoaded event listener