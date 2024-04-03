from datetime import datetime, timedelta

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core import serializers
from .models import Product, Category

def hello(request):
    return HttpResponse('helllooooy')

def show_time(request, hours):
    cur_time = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f'<h1>time: {cur_time} </h1>')


def all_products(request):
    products = Product.objects.all()
    products_json = serializers.serialize('json',products )
    return JsonResponse(products_json, safe=False)
    # pass

def all_categories(request):
    categories = Category.objects.all()
    categories_json = serializers.serialize('json', categories)
    return JsonResponse(categories_json, safe=False)

def product_by_id(request,id):
    products = Product.objects.get(id=id)
    products_json = serializers.serialize('json', [products] )
    return JsonResponse(products_json, safe=False)

def product_by_categories(request, id):
    categories = Category.objects.get(id=id)
    products = Product.objects.filter(category=categories)
    categories_products_json = serializers.serialize('json', products)
    return JsonResponse(categories_products_json, safe=False)

def categories_by_id(request, id):
    categories = Category.objects.get(id=id)
    categories_json = serializers.serialize('json', [categories])
    return JsonResponse(categories_json, safe=False)