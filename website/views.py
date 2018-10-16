from django.shortcuts import render
from django.http import HttpResponse

from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from .models import Post
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
