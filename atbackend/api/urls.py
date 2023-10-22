from django.urls import path
from api import views

urlpatterns=[
    path('hospital/',views.HospitalList.as_view()),
    path('ambulance/',views.AmbulanceList.as_view()),
    path('createhospital/',views.CreateHospitalList.as_view()),
    path('createambulance/',views.CreateAmbulanceList.as_view()),
    path('<pk>/updatehospital/',views.UpdateHospitalList.as_view(),name='updatehospital'),
    path('hospitalambulances/<int:id>',views.GetHospitalAmbulance),
    path('createuser/',views.CreateUser),
    path('bookambulance/<int:id>',views.BookAmbulance),
]