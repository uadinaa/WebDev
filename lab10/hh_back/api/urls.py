from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    # path('hi/', hello),
    
    path('companies/', company_list),

    re_path('companies/(\d{1,2})/', company_details),
    
    re_path('company/(\d{1,2})/vacancies', company_vacancies),

    # path('companies/<int:id>/vacancies/',company_vacancies ),

    path('vacancies/', VacancyListAPIView.as_view()),

    re_path('vacancies/(\d{1,2})/', VacancyDetailAPIView.as_view()),

    re_path('vacancies/top_ten/', VacancyTopTenApiView.as_view()),
]

