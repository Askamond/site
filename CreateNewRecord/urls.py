from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.record_list, name='record_list'),
    url(r'^check_this$', views.post, name = 'check_this'),
]