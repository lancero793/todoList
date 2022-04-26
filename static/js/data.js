const todosBoxElement = document.getElementById("box-todos");
const formCreateTodos = document.querySelector(".form-add-task");
const title = document.getElementById("id_todo");
const addBtn = document.querySelector(".btn__add-todo");
const csrf = document.getElementsByName("csrfmiddlewaretoken");
const spinner = document.querySelector(".spinner-grow");
function createTodo() {
   // alert(title)
   formCreateTodos.addEventListener("submit", (e) => {
       e.preventDefault(); 
 
    $.ajax({
        type: "POST",
        url: "/add-todo/",
        data: {
            "CsrfMiddlewareToken": csrf,
            "title": title
        },
        success: function (response) {
            const data = response.data;
        },
        error: function (response) {
            alert(response);
        }
    })
   })
}

$(".btn__add-todo").click(() => {
    createTodo()
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
      }, 2000); 
    },
        error: (response) => {
            alert(response.status);
        }
    })
}

loadData()