from django.urls import path
from . import views

#URLConf module
app_name = 'bucket'
urlpatterns = [
    path('<int:id>/', views.read_bucket),
    path('all/', views.read_buckets),
    path('create/', views.create_bucket)
]
