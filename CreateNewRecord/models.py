from django.db import models
from django.utils import timezone

class Record(models.Model):
	sex = models.BooleanField()
	age = models.PositiveSmallIntegerField()
	education = models.PositiveSmallIntegerField()
	work_field = models.PositiveSmallIntegerField()
	work_group = models.PositiveSmallIntegerField()
	otnoshenie_k_ekonomike = models.PositiveSmallIntegerField()
	start_date = models.DateTimeField(
		default = timezone.now)

	def GetInfoFromDB(self):
		self.save()

	def SendInfoToDB(self):
		self.save()

	def __str__(self):
		return self.start_date.__str__()