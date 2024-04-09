from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('hi/', hello),
    
    path('companies/', all_companies),

    re_path('companies/(\d{1,2})/', company_by_id),
    
    re_path('company/(\d{1,2})/vacancies', vacancies_by_company),

    path('vacancies/', all_vacancies),

    re_path('vacancies/(\d{1,2})/', vacancy_by_id),

    re_path('vacancies/top_ten/', top_ten_vacancies),
]


