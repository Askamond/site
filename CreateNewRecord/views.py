from django.shortcuts import render
from CreateNewRecord.models import Record
# Create your views here.
def record_list(request):
    return render(request, 'CreateNewRecord/record_list.html', {})

def check_this(request):
    return render(request, 'CreateNewRecord/check_this.html')

def post(request):
    if request.POST['gender'] =='M':
        is_male = True
    else:
        is_male = False
    age_ = int(request.POST['age'])
    if request.POST['education'] == 'basic-general':
        education_ = 0
    elif request.POST['education'] == 'secondary-general':
        education_ = 1
    elif request.POST['education'] == 'secondary-professional':
        education_ = 2
    elif request.POST['education'] == 'incomplete-higher':
        education_ = 3
    elif request.POST['education'] == 'higher':
        education_ = 4
    elif request.POST['education'] == 'scientific-degree':
        education_ = 5

    if request.POST['activity-field'] == 'economic':
        activity_ = 0
    elif request.POST['activity-field'] == 'industrial':
        activity_ = 1
    elif request.POST['activity-field'] == 'financial':
        activity_ = 2
    elif request.POST['activity-field'] == 'education-science':
        activity_ = 3
    elif request.POST['activity-field'] == 'trading':
        activity_ = 4
    elif request.POST['activity-field'] == 'services':
        activity_ = 5
    elif request.POST['activity-field'] == 'agriculture':
        activity_ = 6
    elif request.POST['activity-field'] == 'other':
        activity_ = 7

    if request.POST['occupation'] == 'schoolboy':
        occupation_ = 0
    elif request.POST['occupation'] == 'studing':
        occupation_ = 1
    elif request.POST['occupation'] == 'economic-university':
        occupation_ = 2
    elif request.POST['occupation'] == 'technical-university':
        occupation_ = 3
    elif request.POST['occupation'] == 'humanitarian-university':
        occupation_ = 4
    elif request.POST['occupation'] == 'working':
        occupation_ = 5
    elif request.POST['occupation'] == 'pensioner':
        occupation_ = 6
    elif request.POST['occupation'] == 'other':
        occupation_ = 7

    if request.POST['economy-attitude'] == 'interested':
        economy_ = 0
    elif request.POST['economy-attitude'] == 'studying-economic-profile':
        economy_ = 1
    elif request.POST['economy-attitude'] == 'specialist':
        economy_ = 2
    elif request.POST['economy-attitude'] == 'scientist':
        economy_ = 3
    elif request.POST['economy-attitude'] == 'teacher':
        economy_ = 4
    elif request.POST['economy-attitude'] == 'no-attitude':
        economy_ = 5
    elif request.POST['economy-attitude'] == 'other':
        economy_ = 6

    Record.objects.create(
     sex = is_male,
     age = age_,
     education = education_,
     work_field = activity_,
     work_group = occupation_,
     otnoshenie_k_ekonomike = economy_)
 
    return render(request, 'CreateNewRecord/check_this.html')