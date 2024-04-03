from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('hi/', hello),
    re_path('time/plus/(\d{1,2})/', show_time),

    path('products/', all_products), #List of all Products
    re_path('products/(\d{1,2})/', product_by_id), #Get one Product
    path('categories/', all_categories), #List of all Categories
    re_path(r'^categories/(\d+)/$', categories_by_id), #Get one Category
    re_path(r'^categories/(\d+)/products/$', product_by_categories), #List of Products by Category
]
