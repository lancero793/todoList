from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from .models import Todo
from .forms import EditForm

def home(request):
    return render(request, "index.html")

def add_todo(request):
    todo = None
    todos = None
    if request.is_ajax():
        if request.method == "POST":
            todo = Todo()
            todo.name = request.POST["todo"]
            todo.level = request.POST["level"]
            todo.save()
            todos = {"name": todo.name, "level": todo.level}
          
        return JsonResponse({"test": todos})
    return render(request, "index.html")
    
    
    
def remove_todo(request, id):
    todo = Todo.objects.filter(id=id)
    if not todo == None:
        todo.delete()
        return redirect("home")

"""def edit_todo(request, id):
    if request.is_ajax():
        if request.method == "POST":
            todo = Todo.objects.get(id = id)
            todo.name = request.POST["todo-title"]
            todo.level = request.POST["level-todo"]
            todo.status = request.POST["status"]
            if todo.is_valid():
                todo.save()
            
            
        return JsonResponse({})"""


def load_data(request):
    if request.is_ajax():
        todos = Todo.objects.all()
        all_todos = []
        level = ""
        for todo in todos:
            if todo.level == "N":
                level = "normal"
            elif todo.level == "I":
                level = "importante"
            elif todo.level == "U":
                level = "urgente"
            elif todo.level == "P":
                level = "prioritario"
            all_todos.append({"name": todo.name, "level": level, "status": todo.status})
        return JsonResponse({"data": all_todos})
    return render(request, "index.html")
    
    
def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")