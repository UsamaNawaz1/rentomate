# Generated by Django 3.2.10 on 2022-03-13 19:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_auto_20220314_0001'),
    ]

    operations = [
        migrations.RenameField(
            model_name='propertyimage',
            old_name='image',
            new_name='picture',
        ),
    ]
