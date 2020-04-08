from rest_framework import serializers


from vg_production.recipe_builder.models import Dish
from vg_production.recipe_builder.models import Ingredient

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = 'id','dish_name','recipe','dish_category_id','ingredient_id','dish_description'
    
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = 'id', 'ingredient_name', 'ingredient_category_id'