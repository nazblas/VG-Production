from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from vg_production.recipe_builder.serializers import DishSerializer
from vg_production.recipe_builder.models import Dish

from vg_production.recipe_builder.serializers import IngredientSerializer
from vg_production.recipe_builder.models import Ingredient


class DishView(APIView):
    def get(self,request):
        dishes = Dish.objects.all()
        serializer = DishSerializer(dishes, many = True)

        return Response(serializer.data)

class IngredientView(APIView):
    def get(self,request):
        ingredients = Ingredient.objects.all()
        serializer = IngredientSerializer(ingredients, many = True)

        return Response(serializer.data)