from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('properties/', views.getProperties, name='properties'),
    path('property/<str:pk>/', views.getProperty, name='property'),
]