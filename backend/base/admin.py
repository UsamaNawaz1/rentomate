from django.contrib import admin
from .models import Chat, Property, UserProfile, Address, LandLord, Tenant, Contract, Amenities, Review
# Register your models here.


admin.site.register(Property)
admin.site.register(UserProfile)
admin.site.register(Address)
admin.site.register(LandLord)
admin.site.register(Tenant)
admin.site.register(Contract)
admin.site.register(Review)
admin.site.register(Amenities)
admin.site.register(Chat)
# admin.site.register(PropertyImage)