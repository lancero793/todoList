from xml.parsers.expat import model
from django.db import models

LevelOptions = (
    ("N", "Normal"),
    ("U", "Urgente"),
    ("I", "Importante"),
    ("P", "Prioritario"),
)

class Todo(models.Model):
    name = models.CharField(max_length = 255)
    level = models.CharField(choices=LevelOptions, max_length=1, default="N")
    status = models.BooleanField(default= False)

    def __str__(self):
        return self.name

    
