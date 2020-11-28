from django.db.models.indexes import Index
from django.http import request
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

# Create your views here.
def root(request):
    context = {
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime())
    }
    if request.method == "GET":
    	print(request.GET)
    if request.method == "POST":
        print(request.POST)
    return render(request,'index.html', context)

def index(request):
    return render(request, "index.html")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    return redirect("/")

def show(request,number):
    return HttpResponse(f"placeholder to display blog number: {number}")

def edit(request, number):
    return HttpResponse(f"placeholder to edit blog {number}")

def destroy(request):
    return redirect("/blogs")

def hello_world(request):
    return HttpResponse("Hello World!")