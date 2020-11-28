from django.shortcuts import render, redirect
from .models import User

# Create your views here.
def index(request):
    context = {
        "all_users" : User.objects.all()
    }
    return render(request, 'index.html', context)

def add(request):
    User.objects.create(first_name = request.POST['f_name'], last_name = request.POST['l_name'], 
    email_address = request.POST['email'], age = request.POST['age'])
    return redirect('/')