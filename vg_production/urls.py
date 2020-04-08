
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.views.generic import TemplateView 

from vg_production.recipe_builder.views import DishView
from vg_production.recipe_builder.views import IngredientView


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api/dish/$', DishView.as_view()),
    url(r'^api/ingredient/$', IngredientView.as_view()),
]
