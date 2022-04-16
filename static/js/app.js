const toggleBtn = document.querySelectorAll(".toggle-theme");
const body = document.querySelector("body");
let toggleIcon = document.querySelector(".toggle-icon");
toggleBtn.forEach(btn => btn.addEventListener("click", ()=>{
    btn.classList.toggle("active");
    toggleTheme();
   
    
}))

function toggleTheme(){
    body.classList.toggle("active");
    toggleIcon.classList.toggle("uil-moon");
    toggleIcon.classList.toggle("uil-sun");
    body.classList.toggle("active")
    if(body.classList.contains("active")){
        localStorage.setItem("dark", "false")
        console.log(localStorage.getItem("dark"))
    }else{
        localStorage.setItem("dark", "true")
        console.log(localStorage.getItem("dark"))
    }
}

const btnAddTodo = document.querySelector("btn__add-todo");
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

//const csrftoken = Cookies.get('csrftoken');


function getData() {
    $.ajax({
        url: "add-todo",
        type: "GET",
        dataType: "json",
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(error)
        }
    })
}

$( ".btn__add-todo" ).click(function() {
    getData()
  });

