from django.http import request, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import user, job
import bcrypt 

# Create your views here.
def index(request):
    return render(request, 'index.html')

def success(request):
    if 'logged_in' not in request.session:
        return redirect('/')
    context = {
        "all_jobs" : job.objects.all()
    }
    return render(request, 'dashboard.html', context)

def logout(request):
    request.session.flush()
    return redirect('/')

def login(request):
    errors = user.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    User = user.objects.filter(email=request.POST['email'])
    if User:
        logged_user = User[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['logged_in'] = True
            request.session['f_name'] = logged_user.first_name
            request.session['user_id'] = logged_user.id
            return redirect('/dashboard')
        messages.error(request, "Passwords don't match")
        return redirect('/')
    messages.error(request, "User Does not exist")
    return redirect('/')

def register(request):
    errors = user.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    User = user.objects.create(
        first_name=request.POST['f_name'], 
        last_name=request.POST['l_name'], 
        email=request.POST['email'], 
        password=pw_hash
        )
    request.session['user_id'] = User.id
    request.session['logged_in'] = True
    request.session['f_name'] = request.POST['f_name']
    return redirect('/dashboard')

def job_desc(request, job_id):
    if 'logged_in' not in request.session:
        return redirect('/')
    context = {
        "job" : job.objects.get(id=job_id)
    }
    return render(request, 'desc.html', context)

def job_delete(request, job_id):
    if 'logged_in' not in request.session:
        return redirect('/')
    if request.session['user_id'] != job.objects.get(id=job_id).user.id:
        return redirect('/dashboard')
    j = job.objects.get(id=job_id)
    j.delete()
    return redirect('/dashboard')

def job_edit(request, job_id):
    if 'logged_in' not in request.session:
        return redirect('/')
    if request.session['user_id'] != job.objects.get(id=job_id).user.id:
        return redirect('/dashboard')
    request.session['job_id'] = job_id
    context = {
        "job_edit" : job.objects.get(id=job_id)
    }
    return render(request, 'edit.html', context)

def edit_job(request):
    errors = job.objects.job_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        num = request.session['job_id']
        return HttpResponseRedirect(reverse('job_edit', args=(num,)))
    j = job.objects.get(id=request.POST['job_id'])
    j.title = request.POST['title']
    j.desc = request.POST['desc']
    j.location = request.POST['location']
    j.save()
    return redirect('/dashboard')

def job_add(request):
    if 'logged_in' not in request.session:
        return redirect('/')
    if request.session['user_id']:
        return render(request, 'new_job.html')
    return redirect('/dashboard')

def add_job(request):
    errors = job.objects.job_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/jobs/new')
    j = job.objects.create(
        title = request.POST['title'], 
        desc = request.POST['desc'], 
        location = request.POST['location'], 
        user = user.objects.get(id=request.session['user_id']))
    num = j.id
    return redirect('/dashboard')