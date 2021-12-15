from django.db import models as m

class Tag(m.Model):
    name = m.CharField(max_length=30)

class Bucket(m.Model):
    title = m.TextField()
    desc = m.TextField()