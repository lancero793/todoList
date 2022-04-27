const todosBoxElement = document.getElementById("box-todos");
const formCreateTodos = document.querySelector(".form-add-task");
const alertBox = document.querySelector(".alert");
const title = document.getElementById("name-todo");
const level = document.getElementById("level-todo-id");
const addBtn = document.querySelector(".btn__add-todo");
const csrf = document.getElementsByName("csrfmiddlewaretoken");
const spinner = document.querySelector(".spinner-grow");
function createTodo() {
    let data = null;
    if (title.value != ""){
        alertBox.classList.add("d-none");
    } else {
        alertBox.classList.remove("d-none")
    }
   formCreateTodos.addEventListener("submit", (e) => {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/add-todo/",
            data: {
                "csrfmiddlewaretoken": csrf[0].value,
                "todo": title.value,
                "level": level.value,
            },
            success: (response) => {
                const data = response.test;
                data.forEach(todo => {
                    alert(todo)
                })
            },
            error: (error) => {
                alert("Error", error);
            }
        });
    }); 
}

addBtn.addEventListener("click", () =>{
   createTodo();
  // alert()
})


function loadData() {
    $.ajax({
        type: "GET",
        url: "/load-data",
        success: (response) => {
        spinner.classList.remove("d-none")
            const data = response.data;
       setTimeout(() => {
            spinner.classList.add("d-none")
            data.forEach(todo => {
                todosBoxElement.innerHTML += `
                 <div class="todos flex">
              
                <div class="todo grid">
                    <span class="level-indicator ${todo.level}"></span>
                    <div>
                        
                        <h3 class="todo-title">${todo.name}</h3>
                        <span class="todo-sub-title">${todo.level}</span>
                    </div>
                    <div class="todo-options flex">
                        <div class="current_state">
                            <span>Terminado</span>
                            <input type="checkbox" name="status" id="status">
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class="uil uil-pen "></i>
                        </button>
                        <button type="button" class="btn btn-danger" >
                            <i class="uil uil-trash "></i>
                        </button>
                        
                    </div>
                </div>
            
                </div>
                `;
                
            })
      }, 1000); 
    },
        error: (response) => {
            alert(response.status);
        }
    })
}

loadData()