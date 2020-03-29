from django.shortcuts import render

def game(request):
    return render(request, 'samcalculator/game.html')

def options(request):
    return render(request, 'samcalculator/index.html')
