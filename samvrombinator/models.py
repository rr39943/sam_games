from django.db import models
from django.db import utils

class Vocabularies(models.Model):
    words = models.TextField()
    voc_name = models.CharField(max_length=20, unique=True)

    @classmethod
    def get_vocs_list(cls):
        try:
            return [voc.voc_name for voc in cls.objects.all()]
        except utils.OperationalError:
            return []

    @classmethod
    def get_words_from_voc(cls, voc_name=None):
        if voc_name is None:
            voc = cls.get_last_voc()
        else:
            voc = cls.get_voc(voc_name)

        return voc.words.split(';') if voc is not None else []

    @classmethod
    def get_last_voc(cls):
        return Vocabularies.objects.all().last()

    @classmethod
    def get_voc(cls, voc_name):
        return Vocabularies.objects.filter(voc_name=voc_name).first()