from django.db import models

'''
create table core_products(
    id INTEGER,
    name VARCHAR(255)
    price 
    description TEXT
    count INT
    is_active BOOLEAN
    category FOREIGN KEY for id
)

'''
class Category(models.Model):
    name = models.CharField(max_length = 255)

class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete = models.CASCADE)

