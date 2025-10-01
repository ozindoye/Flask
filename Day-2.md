## Day 2: Expanding Flask Project – Routes, Templates, and Forms

### 1. Objective

* Expand the basic Flask app beyond “Hello World”.
* Learn how to create:

  * Static routes
  * Dynamic routes
  * JSON endpoints
  * Forms and form handling

---

### 2. Project Structure Reminder

```
Flask/
├── app.py
├── venv/           # Virtual environment
├── templates/      # HTML files (index.html, about.html, contact.html)
└── static/         # CSS/JS/images
```

**Tip:** Templates must be inside `templates/`, otherwise Flask raises `jinja2.exceptions.TemplateNotFound`.

---

### 3. Static Routes

* **Purpose:** Serve a fixed page or message at a specific URL.

```python
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")
```

* Use `render_template("filename.html")` to serve HTML pages.
* All HTML files must be in `templates/`.

---

### 4. Dynamic Routes

* **Purpose:** Pass parameters in the URL to create personalized or flexible responses.

```python
# Single parameter
@app.route("/hello/<name>")
def hello(name):
    return f"Hello, {name}!"

# Multiple parameters with type casting
@app.route("/sum/<int:a>/<int:b>")
def sum_numbers(a, b):
    return f"The sum of {a} and {b} is {a+b}"
```

* `<name>` → string
* `<int:var>` → integer
* Flask automatically passes these values as arguments to your function.

---

### 5. JSON Endpoints

* **Purpose:** Return structured data instead of HTML, useful for APIs.

```python
from flask import jsonify

@app.route("/api/data")
def data():
    return jsonify({"app_name": "MyFlaskApp", "version": 1.0})
```

* Use `jsonify()` to return JSON data in Flask.

---

### 6. Forms in Flask

* **Purpose:** Collect user input from a webpage.

**contact.html example:**

```html
<form action="/submit" method="POST">
    <label>Name:</label>
    <input type="text" name="name" required><br><br>

    <label>Email:</label>
    <input type="email" name="email" required><br><br>

    <label>Message:</label>
    <textarea name="message"></textarea><br><br>

    <input type="submit" value="Send">
</form>
```

---

### 7. Handling Forms in Flask

* **Key:** The route handling the form must allow `POST` method.

```python
from flask import request

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    print(f"Name: {name}, Email: {email}, Message: {message}")
    return f"Thanks {name}, we received your message!"
```

**Tips:**

* `request.form.get("field_name")` → gets the value from the form.
* Default Flask routes only allow `GET`. Forms using `POST` must have `methods=["POST"]`.
* Common mistake: `Method Not Allowed` error → fix by adding `methods=["POST"]`.

---

### 8. Common Errors & Fixes

| Error                                          | Cause                                     | Fix                                      |
| ---------------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| `jinja2.exceptions.TemplateNotFound`           | HTML file not in `templates/`             | Move HTML files into `templates/` folder |
| `Method Not Allowed`                           | Form uses POST but route doesn’t allow it | Add `methods=["POST"]` to route          |
| `ModuleNotFoundError: No module named 'flask'` | Flask not installed in active venv        | Activate venv and `pip install flask`    |

---

### 9. Suggested Next Steps

* Add more static routes (`/contact`) and dynamic routes.
* Redirect users after form submission instead of showing a plain string.
* Style pages using the `static/` folder with CSS.

---

### 10. Key Learnings From Day 2

* `templates/` folder is mandatory for `render_template()`.
* Dynamic routes allow URL parameters.
* JSON endpoints make Flask a basic API server.
* Forms require POST routes and `request.form` to access data.
* Debugging common Flask errors makes development smoother.
