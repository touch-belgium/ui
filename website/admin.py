from django.contrib import admin
from .models import Post, Team, BoardMember, Match, Competition, Venue


admin.site.site_header = 'Touch Belgium Administration'

admin.site.register(Post)
admin.site.register(Team)
admin.site.register(BoardMember)
admin.site.register(Match)
admin.site.register(Competition)
admin.site.register(Venue)
