from django.urls import path
from . import views

urlpatterns = [
    

    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='users-profile'),

    path('users/profile/update/', views.updateProfile, name='users-profile-update'),
    
    path('users/', views.getUsers, name='users'),
    path('users/register/', views.registerUser, name='register'),

    path('landlordProperties', views.getLandLordProperties.as_view(), name='landlordProperties'),
    path('submitProperty/', views.submitProperty, name='submitProperty'),

    path('properties/', views.getProperties.as_view(), name='properties'),
    path('property/<str:pk>/', views.getProperty, name='property'),


    path('messages/', views.MessageAPIView.as_view())
]