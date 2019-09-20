"""sam_games URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

app_name = 'samvrombinator'

urlpatterns = [
    path('', views.game, name='game'),
    path('options', views.options, name='options'),
    path('get_words', views.get_words, name='get_words'),
    path('get_vocs', views.get_vocs, name='get_vocs'),
    path('manage', views.manage, name='manage'),
    ]
