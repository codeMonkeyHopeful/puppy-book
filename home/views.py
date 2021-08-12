from django.contrib import messages
from django.shortcuts import render
from django.views.generic import ListView, TemplateView, View
from django.conf import settings
from requests import status_codes
from requests.models import HTTPError
from django.http import JsonResponse, HttpResponse, HttpResponseForbidden, Http404


class SaveUserTextNote(View):
    def get(self, request):

        return HttpResponse('<div>im the api</div>')


class Banana(View):
    def get(self, request):

        return HttpResponse('<div>im the banana</div>')