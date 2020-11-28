from django.http import request
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import user
import bcrypt 

# Create your views here.
def index(request):
    return render(request, 'index.html')

def success(request):
    if 'logged_in' not in request.session:
        return redirect('/')
    return render(request, 'success.html')

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
            return redirect('/success')
    return redirect('/')

def register(request):
    errors = user.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    user.objects.create(
        first_name=request.POST['f_name'], 
        last_name=request.POST['l_name'], 
        email=request.POST['email'], 
        password=pw_hash
        )
    request.session['logged_in'] = True
    request.session['f_name'] = request.POST['f_name']
    return redirect('/success')