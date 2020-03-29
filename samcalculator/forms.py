from django import forms

class SettingsVocForm(forms.Form):
    nb_secondes = forms.IntegerField(label='Nombre de secondes avant explosion',
                                   widget=forms.TextInput(attrs={"class": "slider",
                                                                 "type": "range",
                                                                 "min": "10",
                                                                 "max": "300",
                                                                 "value": "120"}))
    max_nombre = forms.IntegerField(label='Valeur la plus élevée',
                                  widget=forms.TextInput(attrs={"class": "slider",
                                                                "type": "range",
                                                                "min": "10",
                                                                "max": "99",
                                                                "value": "10"}))
