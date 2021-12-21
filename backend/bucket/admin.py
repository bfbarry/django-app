from django.contrib import admin

# Register your models here.
from .models import Bucket
for mod in (Bucket,):
    admin.site.register(mod)