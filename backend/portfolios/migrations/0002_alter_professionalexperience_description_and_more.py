# Generated by Django 4.0.10 on 2023-07-15 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professionalexperience',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
