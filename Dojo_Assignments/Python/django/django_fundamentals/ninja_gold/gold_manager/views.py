from django.shortcuts import render, redirect
import random, datetime

# Create your views here.
def index(request):
    if 'gold' and 'report' in request.session:
        pass
    else:
        request.session['gold'] = 0
        request.session['report'] = []
    return render(request, 'index.html')

def farm(request):
    num = random.randint(10,20)
    request.session['gold'] += num
    request.session['report'].append('Earned ' + str(num) + ' golds from the Farm! ' + str(datetime.datetime.now()))
    return redirect('/')

def cave(request):
    num = random.randint(5,10)
    request.session['gold'] += num
    request.session['report'].append('Earned ' + str(num) + ' golds from the Cave! ' + str(datetime.datetime.now()))
    return redirect('/')

def house(request):
    num = random.randint(2,5)
    request.session['gold'] += num
    request.session['report'].append('Earned ' + str(num) + ' golds from the House! ' + str(datetime.datetime.now()))
    return redirect('/')

def casino(request):
    num = random.randint(1,2)
    if num == 1:
        num = random.randint(0,50)
        request.session['gold'] -= num
        request.session['report'].append('Entered a Casino and lost ' + str(num) + ' golds... Ouch.. ' + str(datetime.datetime.now()))
    else:
        num = random.randint(0,50)
        request.session['gold'] += num
        request.session['report'].append('Entered a Casino and got ' + str(num) + ' golds! ' + str(datetime.datetime.now()))
    return redirect('/')

def reset(request):
    del request.session['gold']
    del request.session['report']
    return redirect('/')