from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('register', views.register),
    path('dashboard', views.success),
    path('logout', views.logout),
    path('jobs/<int:job_id>', views.job_desc, name="job_desc"),
    path('jobs/<int:job_id>/delete/', views.job_delete, name="job_delete"),
    path('jobs/edit/<int:job_id>/', views.job_edit, name="job_edit"),
    path('edit_job', views.edit_job),
    path('jobs/new', views.job_add, name="job_add"),
    path('new_job', views.add_job),
]