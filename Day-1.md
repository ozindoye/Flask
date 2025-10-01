## Day 1: Setting Up Your Flask Environment & "Hello World"

### 1. Objective

* Install Python and Flask.
* Set up a project structure and virtual environment.
* Create a basic Flask app with a "Hello World" route.

---

### 2. Project Structure

```
Flask/
├── app.py        # Main Python file for Flask app
├── venv/         # Virtual environment
├── templates/    # HTML files (optional for now)
└── static/       # CSS/JS/images (optional for now)
```

**Tip:** Keep `app.py` separate from `venv/`.

* `venv/` is only for Python and packages.
* All templates go in `templates/` folder later.

---

### 3. Installing Python

* Use Python 3.10+ (64-bit Windows installer is fine).
* Make sure to check "Add Python to PATH".
* Verify installation:

```bash
python --version
```

---

### 4. Creating a Virtual Environment

* Isolate packages for each project:

```bash
python -m venv venv
```

* Activate it:

**Command Prompt:**

```bash
venv\Scripts\activate
```

**PowerShell:**

```powershell
.\venv\Scripts\Activate.ps1
```

* `(venv)` will appear in the terminal.
* Install packages inside venv only.

---

### 5. Installing Flask

```bash
pip install flask
```

* Make sure venv is activated before installing.
* Verify installation:

```bash
pip show flask
```

---

### 6. Basic "Hello World" Flask App

**app.py example:**

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)
```

**Explanation:**

* `@app.route("/")` → defines the URL path `/`.
* `app.run(debug=True)` → runs the app and enables auto-reload.
* Visiting `http://127.0.0.1:5000/` shows `Hello World!`.

---

### 7. Running Your Flask App

1. Open terminal and navigate to project folder:

```bash
cd C:\Users\ozind\Flask
```

2. Activate your virtual environment.
3. Run app:

```bash
python app.py
```

4. Open browser → `http://127.0.0.1:5000/`
5. You should see **“Hello World!”**

---

### 8. Common Errors & Fixes

| Error                                                 | Cause                             | Fix                                                             |
| ----------------------------------------------------- | --------------------------------- | --------------------------------------------------------------- |
| `ModuleNotFoundError: No module named 'flask'`        | Flask not installed or wrong venv | Activate venv and run `pip install flask`                       |
| `can't open file 'app.py': No such file or directory` | Terminal not in project folder    | Navigate to folder containing `app.py`                          |
| Port 5000 already in use                              | Flask dev server conflict         | Stop other Flask instances or change port: `app.run(port=5001)` |

---

### 9. Optional Next Steps

* Create `templates/` folder to serve HTML later.
* Create `static/` folder for CSS, JS, images.
* Plan your next day: adding routes, templates, and forms.

---

### 10. Key Learnings from Day 1

* Set up Python, venv, and Flask correctly.
* Flask app basics: `Flask()`, `@app.route()`, `app.run(debug=True)`.
* Understand folder structure for future templates and static files.
* Run and test Flask apps in browser.
