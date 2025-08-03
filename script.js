// Wait for the HTML document to fully load before running JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            
            // Select DOM elements and store them in constants
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
            
            // In-memory storage array to simulate localStorage for demo purposes
            // Note: In a real environment, you would use localStorage instead
            let tasksArray = [];
            
            // Function to load tasks from storage (simulated)
            function loadTasks() {
                // In real implementation: const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // For demo, we'll start with some sample tasks
                const storedTasks = tasksArray.length === 0 ? ['Sample task - try adding your own!'] : tasksArray;
                
                // Loop through each stored task and create DOM elements
                storedTasks.forEach(taskText => {
                    addTask(taskText, false); // false = don't save to storage again
                });
            }
            
            // Enhanced function to add a new task to the list
            function addTask(taskText = null, save = true) {
                // If no taskText provided, get it from input field
                if (taskText === null) {
                    taskText = taskInput.value.trim();
                    
                    // Check if the input is not empty
                    if (taskText === "") {
                        alert("Please enter a task!");
                        return; // Exit the function if input is empty
                    }
                    
                    // Clear the input field for next task
                    taskInput.value = "";
                }
                
                // Create a new list item element
                const listItem = document.createElement('li');
                listItem.textContent = taskText;
                
                // Create a remove button for this task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn'); // Using classList.add as suggested!
                
                // Add click event to remove button to delete the task
                removeButton.onclick = function() {
                    // Remove from DOM
                    taskList.removeChild(listItem);
                    
                    // Remove from storage
                    removeTaskFromStorage(taskText);
                };
                
                // Add the remove button to the list item
                listItem.appendChild(removeButton);
                
                // Add the complete list item to the task list
                taskList.appendChild(listItem);
                
                // Save to storage if this is a new task (not loading from storage)
                if (save) {
                    saveTaskToStorage(taskText);
                }
            }
            
            // Function to save a task to storage
            function saveTaskToStorage(taskText) {
                // In real implementation:
                // const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // storedTasks.push(taskText);
                // localStorage.setItem('tasks', JSON.stringify(storedTasks));
                
                // For demo purposes, using in-memory array
                tasksArray.push(taskText);
                console.log('Saved tasks:', tasksArray); // You can see this in browser console
            }
            
            // Function to remove a task from storage
            function removeTaskFromStorage(taskText) {
                // In real implementation:
                // const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // const updatedTasks = storedTasks.filter(task => task !== taskText);
                // localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                
                // For demo purposes, using in-memory array
                tasksArray = tasksArray.filter(task => task !== taskText);
                console.log('Updated tasks:', tasksArray); // You can see this in browser console
            }
            
            // Load existing tasks when page loads
            loadTasks();
            
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