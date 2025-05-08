const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
    window.location.href= "home.html";
}
const regForm = document.getElementById("reg-form") 
const message = document.getElementById("message");


regForm.addEventListener("submit", function(e){
    // Yaha py form ka default behaviour remove kiya hum ny
    e.preventDefault();
    // Yaha py form sy data get kiya
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Yaha py local storage sy data liya
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Yaha py local storgge sy ay data ko check kia k user ka email exists krta yh ni
    const exists = users.find(user => user.email === email);
    // User exists krny py hum ny yh code chala dia
    if(exists){
        message.textContent = "User already exists";
        message.style.color = "red";
        return
    };
    // Data na hony ki surat m yh chly ga or users k array py push ho jy ga form ka data
    users.push({username, email, password});
    // or new user ka data yaha sy os m chla jy ga.
    localStorage.setItem("users", JSON.stringify(users));
    // Or Message show krwa dia k registration ho gai
    message.textContent = "User is Successfully Registered";
    message.style.color = "green";
});