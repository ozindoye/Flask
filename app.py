from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Static Route
@app.route("/")
def home():
    return render_template("Home.html")

# Another static route
@app.route("/about")
def about():
    return render_template("About.html")

# Show Contact Form
@app.route("/contact")
def contact():
    return render_template("Contact.html")

# Show Services Page
@app.route("/services")
def services():
    return render_template("Services.html")

# Show FAQ Page
@app.route("/faq")
def faq():
    return render_template("FAQ.html")

# Show Mortgage Calculator
@app.route("/mortgage")
def mortgage():
    return render_template("Mortgage.html")

# Handle Form Submission
@app.route("/submit", methods=["POST"])
def submit():
    # Get data from form
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # For now, just print it in terminal
    print(f"Name: {name}, Email: {email}, Message: {message}")

    # Respond to user
    return f"Thanks {name}, we recieved your message!"

# JSON endpoint
@app.route("/api/data")
def data():
    return jsonify({"app_name": "MyFlaskApp", "version": 1.0})

# Dynamic route with parameter
@app.route("/hello/<name>")
def hello(name):
    return f"Hello, {name}!"

# Dynamic route with multiple parameters
@app.route("/sum/<int:a>/<int:b>")
def sum_numbers(a, b):
    return f"The sum of {a} and {b} is {a+b}"

if __name__ == "__main__":
    app.run(debug=True)
