from django.shortcuts import render, redirect
from .models import dojos, ninja

# Create your views here.
def index(request):
    context = {
        "all_dojos" : dojos.objects.all(),
    }
    return render(request, 'index.html', context)

def add_dojo(request):
    dojos.objects.create(name = request.POST['name'], city = request.POST['city'], 
    state = request.POST['state'], desc = request.POST['desc'])
    return redirect('/')

def add_ninja(request):
    ninja.objects.create(dojo_id = dojos.objects.get(id=request.POST['dojo']),
    first_name = request.POST['f_name'], last_name = request.POST['l_name'])
    return redirect('/')