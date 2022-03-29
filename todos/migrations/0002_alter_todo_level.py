# Generated by Django 3.2.9 on 2022-03-29 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='level',
            field=models.CharField(choices=[('N', 'Normal'), ('U', 'Urgente'), ('P', 'Prioritario')], default='N', max_length=1),
        ),
    ]