from django_filters.rest_framework import FilterSet
from .models import Property

class PropertyFilter(FilterSet):
    class Meta:
        model = Property
        fields = {
            'property_type': ['exact'],
            'rent': ['lt', 'gt'],
            'no_of_beds': ['exact'],
            'no_of_baths': ['exact']
        }