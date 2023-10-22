from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_admin= models.BooleanField('Is admin', default=False)
    is_user = models.BooleanField('Is user', default=False)  

class Hospital(models.Model):
    hospital_name=models.CharField(max_length=100)
    hospital_city=models.CharField(max_length=100)
    hospital_distance=models.CharField(max_length=50)
    hospital_rating=models.IntegerField(default=0,null=True,blank=True)
    hospital_location=models.CharField(max_length=100)

class Ambulance(models.Model):
    ambulance_type=models.CharField(max_length=100)
    ambulance_rating=models.IntegerField(default=0,null=True,blank=True)
    ambulance_time=models.CharField(max_length=100)
    ambulance_price=models.FloatField(default=0,null=True,blank=True)
    ambulance_drivernumber=models.IntegerField(default=0,null=True,blank=True)
    ambulance_hospital=models.ForeignKey(Hospital,on_delete=models.CASCADE)
