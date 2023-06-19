from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return "<h1>Hello User!</h1>"

@app.route('/home/')
def home():
    return render_template('html/home.html')