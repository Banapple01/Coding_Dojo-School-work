from django.shortcuts import render, redirect
import random

# Create your views here.
def index(request):
    if 'number' in request.session:
        pass
    else:
        request.session['number'] = random.randint(1, 100)
    return render(request, 'index.html')

def guess(request):
    print(request.POST['num'])
    if int(request.POST['num']) == int(request.session['number']):
        request.session['user_guess'] = 1
    elif int(request.POST['num']) < int(request.session['number']):
        request.session['user_guess'] = 0
    elif int(request.POST['num']) > int(request.session['number']):
        request.session['user_guess'] = 2
    else:
        pass
    print(request.session['user_guess'])
    return redirect('/')

def reset(request):
    del request.session['number']
    del request.session['user_guess']
    return redirect('/')