from rest_framework import serializers
from .models import Hospital,Ambulance,User

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hospital
        fields=['id','hospital_name','hospital_city','hospital_distance','hospital_rating','hospital_location']

class AmbulanceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ambulance
        fields=['id','ambulance_time','ambulance_type','ambulance_rating','ambulance_price','ambulance_drivernumber','ambulance_hospital']

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields=['first_name','last_name','email']