from django.shortcuts import render

# Create your views here.
def record_list(request):
    return render(request, 'CreateNewRecord/record_list.html', {})


def post(self, request):
    return request.post.__str__