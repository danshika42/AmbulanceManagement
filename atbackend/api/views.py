from .serializers import HospitalSerializer, AmbulanceSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView
from .models import Hospital, Ambulance
from django.http import JsonResponse
from .forms import SignUpForm
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status


class HospitalList(ListAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer


class AmbulanceList(ListAPIView):
    queryset = Ambulance.objects.all()
    serializer_class = AmbulanceSerializer


class CreateHospitalList(CreateAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer


class CreateAmbulanceList(CreateAPIView):
    queryset = Ambulance.objects.all()
    serializer_class = AmbulanceSerializer


@api_view(['POST'])
def CreateUser(request):
    msg=None
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
    else:
        msg = form.errors
    return Response({'msg':msg })



class UpdateHospitalList(UpdateAPIView):
    queryset=Hospital.objects.all()
    serializer_class=HospitalSerializer


def GetHospitalAmbulance(request,id):
    ambulance_list=Ambulance.objects.filter(ambulance_hospital=id)
    serializer = AmbulanceSerializer(ambulance_list, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def BookAmbulance(request,id):
    ambulance=get_object_or_404(Ambulance,pk=id)
    hospital=get_object_or_404(Hospital,pk=ambulance.ambulance_hospital.id)
    data={
        "hospital_name":hospital.hospital_name,
        "hospital_city":hospital.hospital_city,
        "hospital_distance":hospital.hospital_distance,
        "ambulance_type":ambulance.ambulance_type,
        "ambulance_time":ambulance.ambulance_time,
        "ambulance_drivernumber":ambulance.ambulance_drivernumber,
        "ambulance_price":ambulance.ambulance_price,
    }
    return Response(data,status=status.HTTP_200_OK)
