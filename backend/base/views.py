from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Property
from .properties import properties
from .serializers import PropertySerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products/',
        '/api/products/create/',
        '/api/products/upload',
    ]
    return Response(routes)

@api_view(['GET'])
def getProperties(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProperty(request, pk):
    property=Property.objects.get(pk=pk)
    serializer = PropertySerializer(property, many=False)
    return Response(serializer.data)