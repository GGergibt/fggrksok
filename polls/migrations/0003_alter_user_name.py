# Generated by Django 4.0.3 on 2022-04-03 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]
