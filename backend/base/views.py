
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .filters import PropertyFilter

from .models import LandLord, Property, Tenant, UserProfile, Address
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .properties import properties

from django_filters.rest_framework import DjangoFilterBackend

from .serializers import LandLordSerializer, PropertySerializer, TenantSerializer, UserProfileSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='API')





class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # serializer = UserSerializerWithToken(self.user).data
        serializer = None
        userprofile = UserProfile.objects.get(user=self.user)
        if userprofile.user_type == 'LandLord':
            landlord = LandLord.objects.get(user_profile=userprofile)
            serializer = LandLordSerializer(landlord, many=False).data
        elif userprofile.user_type == 'Tenant':
            tenant = Tenant.objects.get(user_profile=userprofile)
            serializer = TenantSerializer(tenant, many=False).data
        
        # data['username'] = self.username
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateProfile(request):
 
    data = request.data
    user = request.user

    email = data['email']
    phone = data['phone']
    # street = data['street']
    # city = data['city']
    # state = data['state']
    print(user.id)
    serializer = None
    user.email = email
    user.save()
    userprofile = UserProfile.objects.get(user=user)
    userprofile.phone_number = phone;
    userprofile.save()
    if userprofile.user_type == 'LandLord':
        landlord = LandLord.objects.get(user_profile=userprofile)
        serializer = LandLordSerializer(landlord, many=False)
        
    return Response(serializer.data)
    
    
@api_view(['POST'])
def registerUser(request):
    data = request.data
    user_type = data['user_type']
    phone_number = data['phone_number']
   
    user = User.objects.create(
        first_name = data['name'],
        username=data['email'],
        email=data['email'],
        password = make_password(data['password'])
    )
    user.save()
    user_profile = UserProfile.objects.create(user=user, phone_number=phone_number, user_type=user_type)
    serializer = None
    if user_type == 'Tenant':   
        tenant = Tenant.objects.create(user_profile=user_profile)
        serializer = TenantSerializer(tenant, many=False)
    elif user_type == 'LandLord':
        landlord = LandLord.objects.create(user_profile=user_profile)
        serializer = LandLordSerializer(landlord, many=False)
    
    # serializer = UserSerializerWithToken(user, many=False)
    
    return Response(serializer.data)
   
class getLandLordProperties(ListCreateAPIView):
    def get_queryset(self):
        user = self.request.user
        print(user.id)
        queryset = None
        userprofile = UserProfile.objects.get(user=user)
        if userprofile.user_type == 'LandLord':
            landlord = LandLord.objects.get(user_profile=userprofile)
            queryset = Property.objects.filter(created_by=landlord)
        return queryset
    serializer_class = PropertySerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    userprofile = UserProfile.objects.get(user=user)
    serializer = None
    if userprofile.user_type == 'LandLord':
        landlord = LandLord.objects.get(user_profile=userprofile)
        serializer = LandLordSerializer(landlord, many=False)
    elif userprofile.user_type == 'Tenant':
        tenant = Tenant.objects.get(user_profile=userprofile)
        serializer = TenantSerializer(tenant, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)

class getProperties(ListAPIView):
    filter_backends = [DjangoFilterBackend]
    filterset_class = PropertyFilter
    def get_queryset(self):
        query = self.request.query_params.get('keyword')
        queryset = None
        if query != '':
            queryset = Property.objects.filter(title__icontains=query)
        else:
            queryset = Property.objects.all()
        return queryset

    serializer_class = PropertySerializer

# @api_view(['GET'])
# def getProperties(request):
#     query = request.query_params.get('keyword')
#     properties = None
#     if query != '':
#         properties = Property.objects.filter(title__icontains=query)
#     else:
#         properties = Property.objects.all()
#     serializer = PropertySerializer(properties, many=True)
#     return Response(serializer.data)

@api_view(['GET'])
def getProperty(request, pk):
    property=Property.objects.prefetch_related('created_by__user_profile').get(pk=pk)
    serializer = PropertySerializer(property, many=False)
    return Response(serializer.data)