from flask import Flask, render_template
import os

app = Flask(__name__)

def create_app():
    # create the site
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='fdh564BRG$$%$ERF$%',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

@app.route("/")
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)



