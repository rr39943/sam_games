from django import forms
from .models import Vocabularies


class CreateVocForm(forms.Form):
    voc_name = forms.CharField(label='Titre', max_length=20, widget=forms.TextInput(attrs={'class': 'form-control'}))
    words = forms.CharField(label='Vocabulaire', widget=forms.Textarea(attrs={'class': 'form-control'}), required=False)

class SettingsVocForm(forms.Form):
    CHOICES = [(voc, voc) for voc in Vocabularies.get_vocs_list()]
    voc_selected = forms.ChoiceField(label='Vocabulaire choisi',
                                     choices=CHOICES,
                                     widget=forms.Select(attrs={'class':'form-control'}))
    nb_errors = forms.IntegerField(label='Nombre d\'erreurs permises avant de perdre',
                                   widget=forms.TextInput(attrs={"class": "slider",
                                                                 "type": "range",
                                                                 "min": "0",
                                                                 "max": "12",
                                                                 "value": "4"}))
    nb_words = forms.IntegerField(label='Nombre maximum de mots à trouver',
                                  widget=forms.TextInput(attrs={"class": "slider",
                                                                "type": "range",
                                                                "min": "1",
                                                                "max": "30",
                                                                "value": "10"}))
