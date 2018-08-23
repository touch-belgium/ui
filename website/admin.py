from django.contrib import admin
from .models import Team

admin.site.site_header = 'Touch Belgium Administration'

admin.site.register(Team)
