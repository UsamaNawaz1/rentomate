# Generated by Django 3.2.10 on 2022-03-13 19:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_rename_image_propertyimage_picture'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='property',
            name='images',
        ),
        migrations.AddField(
            model_name='propertyimage',
            name='for_property',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='property_images', to='base.property'),
        ),
    ]