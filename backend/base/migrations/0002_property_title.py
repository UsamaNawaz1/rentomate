# Generated by Django 3.2.10 on 2021-12-27 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
    ]