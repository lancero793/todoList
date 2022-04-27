const toggleBtn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
let toggleIcon = document.querySelector(".toggle-icon");
toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("active")
    body.classList.toggle("active");
    if(body.classList.contains("active")){
        localStorage.setItem("dark", "true");
    }else{
        localStorage.setItem("dark", "false");
    }

})

if(localStorage.getItem("dark") == "true"){
    body.classList.add("active")
    toggleBtn.classList.add("active")
}else{
    body.classList.remove("active")
    toggleBtn.classList.remove("active")
    toggleIcon.classList.toggle("uil-moon");
    toggleIcon.classList.toggle("uil-sun");
}
