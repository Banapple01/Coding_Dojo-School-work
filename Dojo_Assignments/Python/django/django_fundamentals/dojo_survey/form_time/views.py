from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def result(request):
    form_name = request.POST['name']
    form_location = request.POST['location']
    form_language = request.POST['lang']
    form_comment = request.POST['comment']
    context = {
        'result_name' : form_name,
        'result_location' : form_location,
        'result_language' : form_language,
        'result_comment' : form_comment,
    }
    return render(request, 'result.html', context)