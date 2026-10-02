// Variables 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {

    // create a div element 
    let task = document.createElement('div');
    task.classList.add('task');
    
    // create a li element inside the task div
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    // console.log(li.parentNode);
    
    // create two buttons for operation
    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

   // delete button for task
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
     
    // check if inputtask is empty show message "Enter a task"
    // otherwise display item  
    if(inputTask.value === "") {
        alert('Please Enter a Task!');
    }else{
        taskContainer.appendChild(task);    
    }

    inputTask.value = "";
   
    
    checkButton.addEventListener('click', ()=>{
       
        // console.log(li.parentNode);
        li.classList.toggle('item');
        // li.parentElement.style.textDecoration = "line-through";

    });

    deleteButton.addEventListener('click', (e)=>{

        let target = e.target;
        // console.log(target);
        // console.log(target.parentElement);
        // console.log(target.parentElement.parentElement);
        // console.log(target.parentElement.parentElement.parentElement);
        target.parentElement.parentElement.remove();
    })
    
});




