# Generated by Django 3.2.10 on 2022-03-13 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_auto_20220313_2108'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='cnic',
            field=models.CharField(default='', max_length=255),
        ),
    ]