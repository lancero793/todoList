const toggleBtn = document.querySelectorAll(".toggle-theme");
toggleBtn.forEach(btn => btn.addEventListener("click", ()=>{
    btn.classList.toggle("active");
}))