# Generated by Django 4.1.1 on 2024-02-05 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usermanagement', '0006_participant_pass_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='participant',
            name='pass_type',
        ),
        migrations.AlterField(
            model_name='team',
            name='event_registered',
            field=models.CharField(choices=[('slam_poetry', 'Verse Vortex'), ('short_story_writing', 'Prose Panorama'), ('word_games', 'Witzkrieg: Wordcraft War'), ('treasure_hunt', 'Cryptic Chronicles'), ('jam', 'JAM-inate: Exppressive Minute Mosaic'), ('quiz', 'General Quiz')], max_length=255),
        ),
    ]