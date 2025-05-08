const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser){
    window.location.href="../index.html";
};

const userName = document.getElementById("username");
userName.textContent = currentUser.username;
    

const todoForm = document.getElementById("todo-form");
const ul = document.getElementById("todo-list");
todoForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const task = e.target.task.value;
    


    e.target.reset();
});
function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "../index.html"
}