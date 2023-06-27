from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('common_page.html')

@app.route('/admin')
def admin():
    return render_template('admin_page.html')
