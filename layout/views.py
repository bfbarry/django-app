from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def index(request): #or just *args, **kwargs
    return JsonResponse({'Home':'Yes'})