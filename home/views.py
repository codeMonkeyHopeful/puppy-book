from django.contrib import messages
from django.shortcuts import render
from django.views.generic import ListView, TemplateView, View
from django.conf import settings
from requests import status_codes
from requests.models import HTTPError
from django.http import JsonResponse, HttpResponse, HttpResponseForbidden, Http404

# Api landing page, just returning a response for testing purposes
class APIMain(View):
    def get(self, request):

        return HttpResponse("<div>im the api</div>")


# This would authenticate the user, in this app we are simply passing back the user_name from the params
def UserLogin(request, *args, **kwargs):
    # Grab from the route
    user_name = kwargs.get("user_name", "")
    if user_name == "Brady" or user_name == "brady":
        return HttpResponse(user_name)
    else:
        return HttpResponse("")


def UserData(request, *args, **kwargs):
    # mocking a call to the DB here, in reality this would use the params to hit the DB, pull back the specific user's dat and put it on the route
    # in our case we are assuming its Brady or Nothing
    if kwargs.get("user_name") == "Brady":
        brady_data = {
            "userId": 1234,
            "userEmail": "brady@gmail.com",
            "userLocation": "Barkerville, OH",
        }
        return HttpResponse("blah")
    else:
        return HttpResponse("")
