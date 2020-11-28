from django.http import request, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import show

# Create your views here.
def index(request):
    context = {
        "all_shows" : show.objects.all()
    }
    return render(request, 'index.html', context)

def show_desc(request, show_id):
    context = {
        "show" : show.objects.get(id=show_id)
    }
    return render(request, 'show.html', context)

def show_edit(request, show_id):
    context = {
        "edit_show" : show.objects.get(id=show_id)
    }
    return render(request, 'edit.html', context)

def edit_show(request):
    errors = show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/shows/new')
    s = show.objects.get(id=request.POST['show_id'])
    s.title = request.POST['title']
    s.network = request.POST['network']
    s.rel_date = request.POST['rel_date']
    s.desc = request.POST['desc']
    s.save()
    num = request.POST['show_id']
    return HttpResponseRedirect(reverse('show_desc', args=(num,)))

def show_add(request):
    return render(request, 'add.html')

def add_a_show(request):
    errors = show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/shows/new')
    s = show.objects.create(title = request.POST['title'], 
    network = request.POST['network'], rel_date = request.POST['rel_date'], 
    desc = request.POST['desc'])
    num = s.id
    return HttpResponseRedirect(reverse('show_desc', args=(num,)))

def show_delete(request, show_id):
    s = show.objects.get(id=show_id)
    s.delete()
    return redirect('/')