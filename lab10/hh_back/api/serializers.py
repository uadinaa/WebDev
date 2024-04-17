from rest_framework import serializers

from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(validated_data)
    
    def delete(self, validated_data):
        return Company.objects.delete(validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name) 
        instance.description = validated_data.get("description", instance.description) 
        instance.city = validated_data.get("city", instance.city) 
        instance.address = validated_data.get("address", instance.address) 

        instance.save()
        return instance
    

class VacancySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer

    def create(self, validated_data):
        return Company.objects.create(validated_data)
    
    def delete(self, validated_data):
        return Company.objects.delete(validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name) 
        instance.description = validated_data["description"]
        instance.salary = validated_data.get("salary", instance.salary) 
        instance.address = validated_data.get("address", instance.address) 

        instance.save()
        return instance

    class Meta:
        model = Vacancy
        fields = ("id", "name", "description", "salary", "company")