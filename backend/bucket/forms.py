from django.forms import ModelForm
from .models import Bucket

class BucketForm(ModelForm):
    class Meta:
        model = Bucket
        fields = ['title', 'description'] #category

    def to_dict(self):
        return {
            'name':'Give your bucketlist a name!',
            'desc':'Describe this bucket list:'
        }