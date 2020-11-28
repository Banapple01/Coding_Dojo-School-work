from django.db import models

# Create your models here.
class show_manager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors['title'] = "Title must be at least 2 characters"
        if len(postData['network']) < 3:
            errors['network'] = "Network must be at least 3 characters"
        if len(postData['desc']) < 10:
            errors['desc'] = "Description must be at least 10 characters"
        return errors

class show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    rel_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = show_manager()