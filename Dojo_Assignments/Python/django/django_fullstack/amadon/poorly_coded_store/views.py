from django.http import request
from django.shortcuts import redirect, render
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def render_check(request):
    total_c = 0
    qff = 0
    pff = 0
    for i in Order.objects.all():
        total_c += i.total_price
        qff += i.quantity_ordered
        pff = i.total_price

    context = {
        "quantity_from_form" : qff,
        "price_from_form" : pff,
        "total_charge" : total_c,
    }
    return render(request, "store/checkout.html", context)


def checkout(request):
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=int(request.POST["quantity"]), 
    total_price=int(request.POST["quantity"]) * float(Product.objects.get(id=request.POST["id"]).price))
    return redirect('/r_check')