# Generated by Django 4.1.6 on 2023-02-10 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketBooking', '0007_movies_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='image',
            field=models.CharField(max_length=255),
        ),
    ]
