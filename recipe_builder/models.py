from django.db import models

class Dish_Category(models.Model):
    dish_category_id = models.AutoField(primary_key=True)
    dish_category_name = models.CharField(max_length=40)

class Ingredient_Category(models.Model):
    ingredient_category_id = models.AutoField(primary_key=True)
    ingredient_category_name = models.CharField(max_length=40)

class Ingredient(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    ingredient_name = models.CharField(max_length=40) 
    ingredient_category_id = models.ForeignKey(Ingredient_Category,on_delete=models.DO_NOTHING)

class Dish_Ingredient(models.Model):
    ingredient_id = models.ForeignKey(Ingredient, on_delete=models.DO_NOTHING)


    
class Dish(models.Model):
    dish_id = models.AutoField(primary_key=True)
    dish_name = models.CharField(max_length=100)
    dish_category_id = models.ForeignKey(Dish_Category, on_delete=models.DO_NOTHING)
    ingredient_id = models.ManyToManyField(Dish_Ingredient)
    recipe = models.TextField(blank=True)
    dish_description = models.TextField(blank=True)


