from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse, HttpResponseRedirect
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Bucket, Tag, Goal
from .forms import BucketForm

### helper functions ###
def query2dict(obj):
    "returns list of objects represented as dictionary"
    return  json.loads(serializers.serialize('json', obj.objects.all()))

### views ###
@csrf_exempt
def create_bucket(request):
    """Create new bucket list"""
    form = BucketForm(request.POST or None)
    if form.is_valid():
        bucket = form.save()
        form = BucketForm()
        for tag_name in form.tags:
            try :
                tag = Tag.objects.get(name=tag_name)
            except:
                tag = Tag(name=tag_name)
                tag.save()
            bucket.tag_set.add(tag)
        for goal_text in form.goals:
            g = Goal(text=goal_text, bucket=x)
            g.save()
        return redirect(f'/bucket/{bucket.id}')
    return render(request, 'create_project.html', {'form':form})
    return JsonResponse(form.to_dict())

def read_bucket(request, id): #or just *args, **kwargs
    """Page for specific bucket list"""
    obj = get_object_or_404(Bucket, id=id)
    return JsonResponse(obj.to_dict())

    
def read_buckets(request): #or just *args, **kwargs
    """list for all buckets list
    TODO: specify for a user"""
    queryset = query2dict(Bucket)
    queryset = [{'id':obj['pk'], **obj['fields']} for obj in queryset]
    return JsonResponse({'buckets':queryset})