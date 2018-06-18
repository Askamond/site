from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.record_list, name='record_list'),
]