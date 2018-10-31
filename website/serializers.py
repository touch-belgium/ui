from django.contrib.auth.models import User, Group
from .models import Post, Tag
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'url')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PostSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    author = UserSerializer()

    class Meta:
        model = Post
        fields = ('title', 'body', 'created_at', 'author', 'tags')
