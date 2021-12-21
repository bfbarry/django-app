from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from .models import Bucket
from .forms import BucketForm
# Create your views here.

def create_bucket(request, id):
    """Create new bucket list"""
    form = BucketForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = BucketForm()
    return JsonResponse(form.to_dict())

def read_bucket(request, id): #or just *args, **kwargs
    """Page for specific bucket list"""
    obj = get_object_or_404(Bucket, id=id)
    return JsonResponse(obj.to_dict())
    # return HttpResponse('Hey')