from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Todo
from .forms import EditForm
import json

def add_todo(request):
    if request.is_ajax():
        if request.method == "POST":
            todo = Todo()
            todo.name = request.POST["todo"]
            todo.level = request.POST["level"]
            todo.save()
        return JsonResponse({"data" : "test"})
    return redirect("home")


def home(request):
    todos = Todo.objects.all()
    return render(request, "index.html", {"todos" : todos})

def remove_todo(request, id):
    todo = Todo.objects.filter(id=id)
    if not todo == None:
        todo.delete()
        return redirect("home")

def edit_todo(request, id):
    todo = Todo.objects.get(id=id)
    if request.method == "POST":
        todo.name = request.POST["name-todo"]
        todo.level = request.POST["level-todo"]
        todo.status = False

        todo.save()
        return redirect("home")

    return render(request, "edit.html",  {"todo" : todo})


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