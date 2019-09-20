from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.shortcuts import redirect
from django.shortcuts import reverse
from .forms import CreateVocForm, SettingsVocForm
from django.contrib.auth.decorators import login_required
from .models import Vocabularies


@login_required
def manage(request):
    def count_words(words):
        return len(words.split(';')) if len(words) > 0 else 0

    def get_words_list(words):
        return '\n'.join(words.split(';')) if len(words) > 0 else ''

    def get_words_inline(words):
        return ';'.join([word.strip() for word in words.split('\n') if len(word.strip()) > 0])

    if request.POST:
        if 'Supprimer' in request.POST:
             voc_name = request.POST['voc_name']
             voc = Vocabularies.get_voc(voc_name=voc_name)
             if voc is not None:
                 voc.delete()
                 msg = 'Vocabulaire supprimé'
             else:
                  msg = f'Echec de la suppression du voc "{voc_name}"'

             form_voc = CreateVocForm()

        elif 'Enregistrer' in request.POST:
            voc_name = request.POST['voc_name']
            words = request.POST['words']
            words = get_words_inline(words)
            nb = count_words(words)

            voc = Vocabularies.get_voc(voc_name=voc_name)

            if voc is not None and nb > 0:
                voc.words = words
                voc.save()
                msg = f'{nb} mot(s) enregistré(s)'
            elif voc is not None and nb == 0:
                msg = 'Il faut au moins un mot pour enregistrer le vocabulaire.'
            else:
                voc = Vocabularies(words=words, voc_name=request.POST['voc_name'])
                voc.save()
                msg = f'{nb} mot(s) enregistré(s)'
            form_voc = CreateVocForm(request.POST)
        else:
            form_voc = CreateVocForm()
            msg = False

    elif request.GET:
         if 'voc_name' in request.GET:
              voc_name = request.GET['voc_name']
              voc = Vocabularies.get_voc(voc_name=voc_name)
              words = voc.words if voc is not None else ''
              msg = f'{count_words(words)} mot(s) chargé(s)'
              words = get_words_list(words)
              form_voc = CreateVocForm({'words': words,
                                        'voc_name': voc_name})
    else:
        msg = False
        form_voc = CreateVocForm()

    voc_names = Vocabularies.get_vocs_list()
    return render(request, 'samvrombinator/manage.html', {'form': form_voc, 'msg': msg, 'voc_names': voc_names})


def game(request):
    return render(request, 'samvrombinator/game.html')

def options(request):
    if not request.POST.get('Jouer'):
        voc_names = Vocabularies.get_vocs_list()
        if len(voc_names) > 0:
            form = SettingsVocForm(initial={'voc_selected': voc_names[-1]})
            return render(request, 'samvrombinator/options.html', {'form': form, 'voc_names': voc_names})
        else:
            return redirect(reverse('samvrombinator:manage'))
    else:
        url = f'{reverse("samvrombinator:game")}?voc_selected={request.POST["voc_selected"]}&nb_words={request.POST["nb_words"]}&nb_errors={request.POST["nb_errors"]}'
        return redirect(url)

def get_words(request):
    if 'voc' in request.GET:
        words = Vocabularies.get_words_from_voc(request.GET['voc'])
    else:
        words = Vocabularies.get_words_from_voc()

    return JsonResponse({'words': words})


def get_vocs(request):
    return JsonResponse({'voc_names': Vocabularies.get_vocs_list()})
