from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Todo
from .forms import EditForm
import json

def add_todo(request):
    if request.method == "POST":
        todo = Todo()
        todo.name = request.POST["todo"]
        todo.level = request.POST["level"]
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
    todo = Todo.objects.get(id=id)
    if request.method == "POST":
        todo.name = request.POST["name-todo"]
        todo.level = request.POST["level-todo"]
        todo.status = False

        todo.save()
        return redirect("home")

    return render(request, "edit.html",  {"todo" : todo})

def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")