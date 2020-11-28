from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('blogs', views.index),
    path('blogs/new', views.new),
    path('blogs/create', views.create),
    path('blogs/<int:number>', views.show),
    path('blogs/<int:number>/edit', views.edit),
    path('blogs/<int:number>/delete', views.destroy),
    path('yo', views.hello_world),
]

# MVC (Not Django)                   MTV (Django)
# Models       - Database            Models
# Views        - User UI/Templates   Templates
# Controllers  - Server logic        Views

