    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser){
        window.location.href="../index.html";
    };

    const userName = document.getElementById("username");
    userName.textContent = currentUser.username;
        

    const todoForm = document.getElementById("todo-form");
    const ul = document.getElementById("todo-list");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function render(){
    const usertask = tasks.filter(user => user.email === currentUser.email);
    
    usertask.forEach(taskObj => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        li.innerHTML = taskObj.task;
        ul.appendChild(li);
    });
}
render();
    todoForm.addEventListener("submit", (e)=> {
        e.preventDefault();

        const task = e.target.task.value;

        const taskObj = {
            task: task,
            email: currentUser.email,
        }
        
        
        tasks.push(taskObj);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        li.innerHTML = taskObj.task;
        ul.appendChild(li);
        
        e.target.reset();
    });
    function logout(){
        localStorage.removeItem("currentUser");
        window.location.href = "../index.html"
    }