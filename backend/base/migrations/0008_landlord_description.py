# Generated by Django 3.2.10 on 2022-03-13 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_property_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='landlord',
            name='description',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]
