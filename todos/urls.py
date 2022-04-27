from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("add-todo/", views.add_todo, name="add-todo"),
    path("load-data/", views.load_data, name="load-data"),
    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
    path("remove-todo/<int:id>", views.remove_todo, name="remove"),
   # path("edit-todo/<int:id>", views.edit_todo, name="edit")
]

