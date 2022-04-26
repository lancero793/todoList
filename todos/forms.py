from django import forms

class EditForm(forms.Form):
    name = forms.CharField(label="Nombre", required=True)
    level = forms.CharField(label="Nivel", required=True)
    status = forms.BooleanField(label="Terminado")