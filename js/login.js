const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
    window.location.href="pages/home.html";
};

const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(user => user.email === email && user.password === password);

    if(userFound){
        alert("Good")
        const currentUser = {...userFound}
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        window.location.href = "pages/home.html";
    } else{
        alert("user not found")
    }

    e.target.reset();
})
