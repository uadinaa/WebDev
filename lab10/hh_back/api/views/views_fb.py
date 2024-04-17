import json
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from rest_framework import status
from api.serializers import CompanySerializer, VacancySerializer

@api_view(["GET", "POST"])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    

@api_view([ "GET", "PUT", "DELETE" ])
def company_details(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'message' : 'delete'}, status=204)



@api_view(["GET"])
def company_vacancies(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
