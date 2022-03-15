from dataclasses import fields
from re import L
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.models import User
from .models import Address, Chat, Contact, LandLord, Property, Tenant, UserProfile


class UserSerializer(serializers.ModelSerializer):

    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name + obj.last_name
        if name == '':
            name = obj.email
        return name

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street', 'city', 'state', 'postal_code']



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializerWithToken(many=False)
    
    class Meta:
        model = UserProfile
        fields = ['user', 'phone_number', 'user_type', 'address', 'description', 'cnic', 'image']

class TenantSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(many=False)
    class Meta:
        model = Tenant
        fields = ['id', 'user_profile', 'total_spent']

class LandLordSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(many=False)
    class Meta:
        model = LandLord
        fields = ['id', 'user_profile', 'total_earning', 'listed_properties']



class PropertySerializer(serializers.ModelSerializer):
    created_by = LandLordSerializer(many=False)
    address = AddressSerializer(many=False)
    # image = serializers.SerializerMethodField(method_name='image_url')
    class Meta:
        model = Property
        fields = ['id', 'created_by', 'title', 'image', 'description', 'address', 'created_on', 'total_area', 'no_of_baths', 'no_of_beds', 'rent', 'longitude', 'latitude']

    # def image_url(self, property: Property):
    #     image = property.image.url
    #     return image

class ChatSerializer(serializers.ModelSerializer):
    created_by = UserProfileSerializer(many=False)
    # image = serializers.SerializerMethodField(method_name='image_url')
    chat_with = UserProfileSerializer(many=False)
    for_property = PropertySerializer(many=False)
    class Meta:
        model = Chat
        fields = ['id', 'created_by', 'chat_with', 'for_property', 'room_name']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['description', 'email', 'name']