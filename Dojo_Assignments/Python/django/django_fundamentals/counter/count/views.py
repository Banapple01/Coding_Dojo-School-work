from django.shortcuts import redirect, render

# Create your views here.
def index(request):
    if 'number' in request.session:
        request.session['number'] += 1
    else:
        request.session['number'] = 0
    return render(request, 'index.html')

def destroy(request):
    request.session['number'] = 0
    return redirect('/')