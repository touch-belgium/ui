from django.contrib import admin
from .models import Post, Team, BoardMember, Match, Competition, Venue, Tag


admin.site.site_header = 'Touch Belgium Administration'

# Special one for Post
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    # Autosave author (the one who made the request)
    exclude = ('author',)
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'author', None) is None:
            obj.author = request.user
        obj.save()

admin.site.register(Team)
admin.site.register(BoardMember)
admin.site.register(Match)
admin.site.register(Competition)
admin.site.register(Venue)
admin.site.register(Tag)
