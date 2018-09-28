from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('where', views.index, name='where'),
    path('competitions', views.index, name='competitions'),
    path('rules', views.index, name='rules'),
]
