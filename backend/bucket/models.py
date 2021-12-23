from django.db import models as m


class Tag(m.Model):
    """Category tags for bucketlist"""
    name = m.CharField(max_length=30)
    def __repr__(self):
        return f'<Tag: {self.name}>'


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
            'id':self.id,
            'name':self.title,
            'desc':self.description,
            'tags':[tag.name for tag in self.tags.all()],
            'goals':[g.text for g in self.goal_set.all()]
        }

class Goal(m.Model):
    """Goal for bucketlist"""
    text = m.TextField(max_length=120)
    # many -> one
    bucket = m.ForeignKey(Bucket, on_delete=m.CASCADE)

    def __repr__(self):
        return f'<Goal: {self.text}>'