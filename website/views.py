from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework import generics
from .models import Post
from .serializers import UserSerializer, PostSerializer
# Create your views here.


def index(request):
    posts = Post.objects.order_by('-pk')[:3]

    context = {"posts": posts}
    return render(request, 'index.html', context)


def news(request):
    posts = Post.objects.order_by('-pk')
    paginator = Paginator(posts, 5)

    page = request.GET.get('page')
    first_posts = paginator.get_page(page)
    context = {"posts": first_posts}
    return render(request, 'news.html', context)



class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
