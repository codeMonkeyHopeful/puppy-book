from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views
from django.conf.urls import url

# from users import views as userViews
from . import views
from django.contrib.auth.decorators import login_required
from django.urls import path, include


urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('admin/', admin.site.urls),
    path("api/", views.APIMain.as_view(), name="none"),
    path("api/login/<str:user_name>", views.UserLogin, name="UserLogin"),
    path("api/user/getprofile/<str:user_name>", views.GetUserData, name="GetUserData"),
    path(
        "api/user/update-profile",
        views.UpdateUserData.as_view(),
        name="UpdateUserData",
    ),
]
