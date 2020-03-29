from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.shortcuts import redirect
from django.shortcuts import reverse
from .forms import SettingsVocForm

def game(request):
    return render(request, 'samcalculator/game.html')

def options(request):
    if not request.POST.get('Jouer'):
        form = SettingsVocForm()

        return render(request, 'samcalculator/options.html', {'form': form})

    else:
        url = f'{reverse("samcalculator:game")}?sec={request.POST["nb_secondes"]}&max={request.POST["max_nombre"]}&add=true'
        return redirect(url)
