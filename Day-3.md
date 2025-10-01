## **Day 3 – Integrating Old Banking Website with Flask**

### 🔎 **What Went Wrong**

When trying to merge an **old static HTML/CSS/JS banking project** with Flask:

1. **Direct File Links in HTML**
    - Old HTML used links like `href="Home.html"` instead of Flask routes.
    - This broke navigation when running inside Flask.
2. **CSS & JS References**
    - CSS and JS were referenced as plain file paths.
    - Flask needs them served through the `static/` folder with `url_for('static', filename='...')`.
3. **Missing Routes**
    - No Flask routes existed for new pages (`/services`, `/faq`, `/mortgage`).
    - Caused 404 errors when clicking links.
4. **Inconsistent Navigation**
    - Each HTML page had slightly different nav menus → confusing and buggy.
5. **Contact Form Issues**
    - Old form wasn’t wired into Flask (`action="submit.php"` style), so it failed.

---

### 🛠️ **Fixes Made**

1. **Navigation Standardization**
    - Replaced raw links with Flask’s `url_for()` function:
        
        ```html
        <a href="{{ url_for('home') }}">Home</a>
        <a href="{{ url_for('about') }}">About</a>
        <a href="{{ url_for('services') }}">Services</a>
        <a href="{{ url_for('faq') }}">FAQ</a>
        <a href="{{ url_for('mortgage') }}">Mortgage</a>
        <a href="{{ url_for('contact') }}">Contact</a>
        
        ```
        
    - Ensured every template uses the **same navigation menu**.
2. **CSS & JS Integration**
    - Moved all **JavaScript files into `static/`**.
    - Updated references:
        
        ```html
        <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
        <script src="{{ url_for('static', filename='script.js') }}"></script>
        
        ```
        
3. **Added Missing Routes in Flask**
    
    ```python
    @app.route("/services")
    def services():
        return render_template("services.html")
    
    @app.route("/faq")
    def faq():
        return render_template("faq.html")
    
    @app.route("/mortgage")
    def mortgage():
        return render_template("mortgage.html")
    
    ```
    
4. **Fixed Contact Form**
    - Updated form action:
        
        ```html
        <form action="{{ url_for('submit') }}" method="POST">
        
        ```
        
    - Flask `/submit` route now handles form data properly.

---

### ✅ **Results**

- Navigation now works across all pages.
- CSS & JS are loaded correctly.
- All templates standardized.
- Contact form submits to Flask and validates with JavaScript.

---

### 💡 **New Concepts Learned**

1. **`url_for()` in Flask**
    - Cleaner and safer than hardcoding paths.
    - Works even if routes change later.
2. **Static File Serving**
    - Flask uses a special `static/` folder for CSS, JS, and images.
    - Always reference with `url_for('static', filename='...')`.
3. **Consistent Navigation**
    - Important to avoid "split brain" issues across multiple pages.
    - (Future idea: use **Jinja templates with `include` or `extend`** so you don’t repeat navigation in every file).
4. **Scaling Routes**
    - As the app grows, you’ll keep adding Flask routes for each page.
    - Later, you can organize them into **Blueprints** to avoid a giant `app.py`.
