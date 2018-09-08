import os
from .settings import *

DEBUG = True                    # TODO: change !
SECRET_KEY = os.environ.get('SECRET_KEY')
