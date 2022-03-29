from django.shortcuts import render, redirect
from .models import Todo

def add_todo(request):
    if request.method == "POST":
        todo = Todo()
        todo.name = request.POST["todo"]
        todo.level = "normal"
        todo.save()
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
    todo = Todo.objects.filter(id=id)
    if not todo == None:
        todo.delete()
        return redirect("home")


def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")