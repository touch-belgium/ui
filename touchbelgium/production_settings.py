import os
from .settings import *

DEBUG = True
SECRET_KEY = os.environ.get('SECRET_KEY')
