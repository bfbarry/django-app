from django.forms import ModelForm
from .models import Bucket

class BucketForm(ModelForm):
    # see https://medium.com/swlh/django-forms-for-many-to-many-fields-d977dec4b024
    # for nice Django form
    class Meta:
        model = Bucket
        fields = ['title', 'description'] #category

    def to_dict(self):
        return {
            'name':'Give your bucketlist a name!',
            'desc':'Describe this bucket list:'
        }