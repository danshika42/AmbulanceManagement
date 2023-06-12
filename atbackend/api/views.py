from .serializers import HospitalSerializer, AmbulanceSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView
from .models import Hospital, Ambulance
from django.http import JsonResponse
from rest_framework.response import Response
from .forms import SignUpForm, LoginForm
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.shortcuts import render,redirect


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
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
    else:
        msg = form.errors
    return Response({'msg':msg })

@api_view(['POST'])
def AuthenticateUser(request):
    msg=None
    form = LoginForm(request.POST)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            print(username)
            print(password)
            login(request, user)   
        else:
            msg ={"password":["Invalid Credentials"]}
    else:
        msg = form.errors
    return Response({'msg': msg})

class UpdateHospitalList(UpdateAPIView):
    queryset=Hospital.objects.all()
    serializer_class=HospitalSerializer

def GetHospitalAmbulance(request,id):
    ambulance_list=Ambulance.objects.filter(ambulance_hospital=id)
    serializer = AmbulanceSerializer(ambulance_list, many=True)
    return JsonResponse(serializer.data, safe=False)

def GetLoggedInUser(request):
    current_user = request.user
    print(current_user)
    return render(request,'index.html',{'current_user':current_user})
# Create your views here.

def login_view(request):
    form = LoginForm(request.POST or None)
    msg = None
    if request.method == 'POST':
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)   
            else:
                msg= 'invalid credentials'
        else:
            msg = 'error validating form'
    return render(request, 'index.html', {'form': form, 'msg': msg})
