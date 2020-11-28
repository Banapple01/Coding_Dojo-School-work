from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('shows/<int:show_id>', views.show_desc, name="show_desc"),
    path('shows/<int:show_id>/edit/', views.show_edit, name="show_edit"),
    path('edit_show', views.edit_show),
    path('shows/<int:show_id>/delete/', views.show_delete, name="show_delete"),
    path('shows/new', views.show_add, name="show_add"),
    path('add_a_show', views.add_a_show),
]