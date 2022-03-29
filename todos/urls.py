from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("add-todo/", views.add_todo, name="add-todo"),
    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
    path("remove-todo/<int:id>", views.remove_todo, name="remove"),
]