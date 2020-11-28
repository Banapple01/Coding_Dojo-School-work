from flask import Flask
app = Flask(__name__) # __main__

@app.route('/')
def hello_flask():
    return "Hello World!"

@app.route('/dojo')
def hello_dojo():
    return "Dojo!"

@app.route('/say/<name>')
def say_name(name):
    return f"Hi {name.capitalize()}!"

@app.route('/repeat/<int:num>/<word>')
def repeat(num, word):
    return f"{word.capitalize()} " * int(num)

@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug=True)