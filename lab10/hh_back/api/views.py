from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Company, Vacancy
from django.views import View

def hello(request):
    return HttpResponse('helllooooy')


def all_companies(request):
    companies = list(Company.objects.all().values())
    return JsonResponse(companies, safe=False)


def company_by_id(request,id):
    company = list(Vacancy.objects.filter(id=id).values())
    return JsonResponse(company, safe=False)


def all_vacancies(request):
    vacancies = list(Vacancy.objects.all().values())
    return JsonResponse(vacancies, safe=False)


def vacancy_by_id(request,id):
    vacancy = list(Vacancy.objects.filter(id=id).values())
    return JsonResponse(vacancy, safe=False)


def top_ten_vacancies(request):
    top_ten_vacancies = list(Vacancy.objects.all().order_by('-salary')[:10].values())
    return JsonResponse(top_ten_vacancies, safe=False)


def vacancies_by_company(request,id):
    # company = Company.objects.get(id=id)
    vacancies = list(Vacancy.objects.filter(company=id).values())
    return JsonResponse(vacancies, safe=False)


'''
The issue you're encountering is due to the use of the serializers.serialize()function, 
which expects a queryset or a list of model instances as input, 
but you're passing a list of dictionaries instead.'''
