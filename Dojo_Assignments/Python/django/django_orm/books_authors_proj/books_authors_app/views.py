from django.http import request, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render, redirect
from .models import books, author

# Create your views here.
def index(request):
    context = {
        "all_books" : books.objects.all(),
    }
    return render(request, 'index.html', context)

def book(request, num):
    context = {
        "all_authors" : author.objects.all(),
        "one_book" : books.objects.get(id=num),
    }
    return render(request, 'books.html', context)

def a_authors(request):
    context = {
        "all_authors" : author.objects.all(),
    }
    return render(request, 'authors.html', context)

def auth_desc(request, num):
    context = {
        "one_author" : author.objects.get(id=num),
        "all_books" : books.objects.all(),
    }
    return render(request, 'auth_desc.html', context)

def add_book(request):
    author.objects.get(id=request.POST['auth_id']).books.add(books.objects.get(id=request.POST['book_list']))
    num = request.POST['auth_id']
    return HttpResponseRedirect(reverse('a_desc_page', args=(num,)))

def add_author(request):
    books.objects.get(id=request.POST['book_id']).authors.add(author.objects.get(id=request.POST['author_list']))
    num = request.POST['book_id']
    return HttpResponseRedirect(reverse('a_book_desc', args=(num,)))