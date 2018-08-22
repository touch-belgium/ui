from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=50)
    founding_year = models.IntegerField()
    description = models.TextField()
    logo = models.ImageField(blank=True, null=True,
                             upload_to="media/")
