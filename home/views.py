from django.contrib import messages
from django.shortcuts import render
from django.views.generic import ListView, TemplateView, View
from django.conf import settings
from requests import status_codes
from requests.models import HTTPError
from django.http import JsonResponse, HttpResponse, HttpResponseForbidden, Http404
import json

# Api landing page, just returning a response for testing purposes
class APIMain(View):
    def get(self, request):

        return HttpResponse("<div>im the api</div>")


# This would authenticate the user, in this app we are simply passing back the user_name from the params
def UserLogin(request, *args, **kwargs):
    # Grab from the route
    user_name = kwargs.get("user_name", "").lower()
    if user_name == "brady":
        return HttpResponse(user_name)
    else:
        return HttpResponse("")


def GetUserData(request, *args, **kwargs):
    # mocking a call to the DB here, in reality this would use the params to hit the DB, pull back the specific user's dat and put it on the route
    # in our case we are assuming its Brady or Nothing
    user_name = kwargs.get("user_name").lower()
    # should make call to DB here
    if user_name == "brady":
        brady_data = {
            "name": "Brady",
            "userId": 1234,
            "userEmail": "brady@gmail.com",
            "userLocation": "Barkerville, OH",
        }

        # convert to send across the wire
        brady_data = json.dumps(brady_data)
        return HttpResponse(json.dumps(brady_data))
    else:
        return HttpResponse("")


def UpdateUserData1(request, *args, **kwargs):
    # This would update the data in the DB before returning a status code that we could use to check the success/fail of the upsert
    user_data = id = request.GET["userData"]

    print("HERE", json.dumps(user_data))
    return JsonResponse(json.dumps(user_data))


class UpdateUserData(View):
    def get(self, request):
        user = request.GET["userData"]
        print("HERE", user)
        # userJSON = json.dumps(user)
        return JsonResponse(user, safe=False)
