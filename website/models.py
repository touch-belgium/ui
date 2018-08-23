from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=50)
    founding_year = models.IntegerField()
    description = RichTextUploadingField()
    logo = models.ImageField(blank=True, null=True,
                             upload_to="media/")

    def __str__(self):
        return self.name
