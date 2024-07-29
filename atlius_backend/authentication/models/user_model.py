from django.db import models
import bcrypt

class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email=models.EmailField(blank=False, unique=True)
    password=models.CharField(blank=False)

    def set_password(self, raw_pass):
        self.password=bcrypt.hashpw(raw_pass.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self, raw_pass):
        return bcrypt.checkpw(raw_pass.encode('utf-8'),self.password.encode('utf-8'))
    
    def __str__(self) -> str:
        return self.email