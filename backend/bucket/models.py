from django.db import models as m


class Tag(m.Model):
    name = m.CharField(max_length=30)

class Bucket(m.Model):
    # ATHLETICS = 'ATH'
    # ART = 'ART'
    # TRAVEL = 'TRVL'
    # CATEGORY_CHOICES = [
    #     (ATHLETICS, 'Athletics'),
    #     (ART, 'Art/Music'),
    #     (TRAVEL, 'Travel')
    # ]
    title = m.CharField(max_length=50)
    # category = m.CharField(max_length=30,
    #                         choices=CATEGORY_CHOICES)
    description = m.TextField()

    #one to many
    tags = m.ManyToManyField(Tag)

    def to_dict(self):
        return {
            'name':self.title,
            'desc':self.description
        }