# Generated by Django 2.0.6 on 2018-06-14 09:47

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sex', models.BooleanField()),
                ('age', models.PositiveSmallIntegerField()),
                ('education', models.PositiveSmallIntegerField()),
                ('work_field', models.PositiveSmallIntegerField()),
                ('work_group', models.PositiveSmallIntegerField()),
                ('otnoshenie_k_ekonomike', models.PositiveSmallIntegerField()),
                ('start_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]