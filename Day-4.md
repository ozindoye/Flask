## **Day 4 – Refactoring Flask App Using Blueprints**

### **1. Objective**

- Refactor the existing Flask project to use **Blueprints** for better scalability and cleaner code organization.
- Separate routes into modular files.
- Move app initialization logic into a dedicated `__init__.py` file.
- Prepare for future steps such as adding configuration via `config.py`.

---

### **2. Why This Refactor Was Needed**

Previously, all routes and app setup were placed inside a single `app.py` file.  
While this works for small projects, it becomes harder to maintain as the project grows.  
By refactoring the structure to use blueprints, the application now follows a **more professional and modular pattern**, similar to production Flask applications.

---

### **3. New Project Structure**

Flask-Banking/
├── run.py
├── app/
│ ├── init.py
│ └── routes/
│ ├── home.py
│ ├── about.py
│ ├── contact.py
│ ├── services.py
│ ├── faq.py
│ └── mortgage.py
├── templates/
│ ├── home.html
│ ├── about.html
│ ├── contact.html
│ ├── services.html
│ ├── faq.html
│ └── mortgage.html
└── static/
├── ...

---

### **4. Key Changes Made**

1. **Removed `app.py`**  
   Instead of a single file, the app is now initialized in `__init__.py` and run via `run.py`.

2. **Created `__init__.py`**  
   Contains a `create_app()` function that initializes the Flask app and registers all blueprints.

3. **Created `run.py`**  
   Serves as the single entry point to start the server.

4. **Moved Routes into Separate Files**  
   Each page (`home`, `about`, `contact`, `services`, `faq`, `mortgage`) now has its own file under `app/routes/`.  
   Each route file defines a **Blueprint** and associated view functions.

5. **Registered Blueprints**  
   All blueprints are imported and registered in `__init__.py`, replacing the previous `app.route()` structure.

---

### **5. Benefits of This Refactor**

- **Better organization**: Routes are logically grouped by page.  
- **Easier to scale**: New pages or features can be added as separate route files.  
- **Cleaner entry point**: `run.py` focuses only on starting the app.  
- **More professional structure**: Mirrors patterns used in larger Flask applications.

---

### **6. Key Learnings From Day 4**

- How to use **Flask Blueprints** to modularize routes.  
- The role of `__init__.py` in application factory patterns.  
- How to restructure a small project into a more professional layout.  
- Importance of separating app initialization (`__init__.py`) from execution (`run.py`).

---
