from django.db import models
from django.contrib.auth.models import User
from django.forms import ImageField


class Address(models.Model):
    street = models.CharField(max_length=255, null=False)
    city = models.CharField(max_length=255, null=False)
    state = models.CharField(max_length=255, null=False)
    postal_code = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.street


class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='userprofile', on_delete=models.CASCADE, null=False)
    phone_number = models.CharField(max_length=255, null=False)
    user_type = models.CharField(max_length=255, null=False)
    # address = models.ForeignKey(Address, related_name='address', on_delete=models.CASCADE, null=True, blank=True)
    address = models.TextField(null=True, blank=True, default='')
    description = models.TextField(null=True, blank=True, default='')
    cnic = models.CharField(max_length=255, null=False, default='')
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    def __str__(self):
        return self.user.username

class LandLord(models.Model):
    total_earning = models.DecimalField(max_digits=10,default=0.0, null=False, decimal_places=2)
    listed_properties = models.IntegerField(default=0, null=False)
    user_profile = models.ForeignKey(UserProfile, related_name='landlordUserProfile', on_delete=models.CASCADE, null=False)
    
    def __str__(self):
        return self.user_profile.user.username

class Tenant(models.Model):
    total_spent = models.DecimalField(max_digits=10,default=0.0, null=False, decimal_places=2)
    user_profile = models.ForeignKey(UserProfile, related_name='tenantUserProfile', on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.user_profile.user.username



class Property(models.Model):
    title = models.CharField(max_length=255, null=False, default='')
    created_by = models.ForeignKey(LandLord, related_name='landlordProperty', on_delete=models.CASCADE, null=False)
    description = models.TextField(null=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    address = models.ForeignKey(Address, related_name='propertyAddress', on_delete=models.CASCADE, null=False)
    created_on = models.DateTimeField(auto_now_add=True)
    total_area = models.DecimalField(max_digits=8,default=0.0, null=False, decimal_places=2)
    no_of_baths = models.IntegerField(default=0, null=False)
    no_of_beds = models.IntegerField(default=0, null=False)
    rent = models.DecimalField(max_digits=8,default=0, null=False, decimal_places=2)
    property_type = models.CharField(max_length=200, null=False, default='House')
    status = models.CharField(max_length=255, default='Active')
    longitude = models.CharField(max_length=255, default='')
    latitude =  models.CharField(max_length=255, default='')
    def __str__(self):
        return self.title

# class PropertyImage(models.Model):
#     picture = models.ImageField(upload_to='images/', null=True, blank=True)
#     for_property = models.ForeignKey(Property, related_name='property_images', null=True, on_delete=models.CASCADE)
#     url = models.CharField(max_length=255, null=False, default='')



class Review(models.Model):
    on_property = models.ForeignKey(Property, related_name='propertyReview', on_delete=models.SET_NULL, null=True)
    given_to = models.OneToOneField(LandLord, related_name='landlordReview', on_delete=models.CASCADE, null=False)
    given_by = models.OneToOneField(Tenant, related_name='tenantReview', on_delete=models.CASCADE, null=False)
    created_on = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(default=0, null=True )
    description = models.TextField(null=True)

    def __str__(self):
        return str(self.rating)

class Amenities(models.Model):
    name = models.CharField(max_length=255)
    for_property = models.ManyToManyField(Property, related_name='propertyAmenities')

    def __str__(self):
        return self.name

class Contract(models.Model):
    landlord = models.ForeignKey(LandLord, related_name='landlordContract', on_delete=models.CASCADE, null=False)
    tenant = models.ForeignKey(Tenant, related_name='tenantContract', on_delete=models.CASCADE, null=False)
    created_on = models.DateTimeField(auto_now_add=True)
    on_property = models.OneToOneField(Property, related_name='propertyContract', on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.property.title

class Messages(models.Model):
    description = models.TextField(null=True, default='')
    created_by = models.ForeignKey(UserProfile, related_name='created_by_message', null=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    sent_to = models.ForeignKey(UserProfile, related_name='sent_to_userprofile', null=True, on_delete=models.CASCADE)

class Chat(models.Model):
    room_name = models.CharField(max_length=255, null=True, default='')
    for_property = models.ForeignKey(Property, related_name='chat_property', null=True, on_delete=models.CASCADE)
    created_by = models.ForeignKey(UserProfile, related_name='created_by_userprofile', null=True, on_delete=models.CASCADE)
    chat_with = models.ForeignKey(UserProfile, related_name='chat_with_userprofile', null=True, on_delete=models.CASCADE)
    
class Contact(models.Model):
    description = models.CharField(max_length=255, null=True, default='')
    email = models.CharField(max_length=255, null=True, default='')
    name = models.CharField(max_length=255, null=True, default='')