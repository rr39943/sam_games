from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import logout


def games_index(request):
    return render(request, 'sam_games_index/games_index.html')


def login_view(request):
    return render(request, 'sam_games_index/login.html')


def logout_view(request):
    logout(request)
    return redirect(games_index)
