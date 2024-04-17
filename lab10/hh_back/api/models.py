from django.db import models

# Create your models here.

from django.db import models

'''
Company
name - CharField
description - TextField
city - CharField
address - TextField

'''

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Description: {self.description}, City: {self.city}, Address: {self.address}"

    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'city' : self.city,
            'address' : self.address
        }
    
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'        

'''
Vacancy
name - CharField
description - TextField
salary - FloatField
company - ForeignKey

'''

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)   

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Description: {self.description}, Salary: {self.salary}, Company: {self.company}"

    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'salary' : self.salary,
            'company' : self.company   #тут не селф 
        }
    
    class Meta:
        app_label = "api"
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies' 

