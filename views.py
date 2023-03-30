# Allows views to be seperated
from flask import Blueprint

# Defining views
views = Blueprint('views', __name__)

# Defining home route
@views.route('/')
def home():
    return '<h1>Helloooooo worlddd</h1>'
