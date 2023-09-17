from django.shortcuts import render
from django.http import HttpResponseRedirect

# Create your views here.

def home(response):
    return render(response, 'main/home.html', {})

def resume(response):
    return render(response, 'main/resume.html', {})

def projects(response):
    return render(response, 'main/projects.html', {})