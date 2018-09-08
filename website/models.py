from django.db import models
from django.contrib.auth.models import User
from ckeditor_uploader.fields import RichTextUploadingField


class Post(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    body = RichTextUploadingField()

    def __str__(self):
        out = self.title
        if self.author is not None:
            out += ", by "
            out += self.author.username
        return out


class Team(models.Model):
    name = models.CharField(max_length=50)
    website = models.URLField(blank=True)
    logo = models.ImageField(blank=True, null=True, # TODO change to default placeholder image
                             upload_to="media/")

    def __str__(self):
        return self.name


class Venue(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Match(models.Model):
    home_team = models.ForeignKey('Team', on_delete=models.PROTECT,
                                  related_name="home_team")
    away_team = models.ForeignKey('Team', on_delete=models.PROTECT,
                                  related_name="away_team")
    when = models.DateTimeField()
    venue = models.ForeignKey('Venue', on_delete=models.PROTECT,
                              blank=True, null=True)
    pitch = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.when.strftime("%d %b %H:%M") + " | " + \
            self.home_team.name + ' - ' + self.away_team.name

    class Meta:
        verbose_name_plural = "matches"


class BoardMember(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    email = models.EmailField(blank=True)
    phone_number = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name + ' - ' + self.position


class Competition(models.Model):
    name = models.CharField(max_length=50)
    teams = models.ManyToManyField('Team')

    def __str__(self):
        return self.name
