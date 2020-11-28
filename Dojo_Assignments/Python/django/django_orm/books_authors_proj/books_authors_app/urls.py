from os import name
from django.urls import path
from . import views
#from .models import books

urlpatterns = [
    path('', views.index),
    path('books/<int:num>/', views.book, name="a_book_desc"),
    path('authors', views.a_authors),
    path('authors/<int:num>/', views.auth_desc, name="a_desc_page"),
    path('add_book', views.add_book),
    path('add_author', views.add_author),
]