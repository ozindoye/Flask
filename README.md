# Flask Banking Website – Learning Journey

A beginner-friendly Flask project where I integrate my old static banking website into Flask. This project documents my day-by-day progress, learning Flask fundamentals, templates, routes, forms, static file integration, and organizing a project professionally with Blueprints.

---

## Current Features

- **Static Routes**: Home, About, Services, FAQ, Mortgage, Contact  
- **Contact Form**: Submits via Flask `/submit` route with validation  
- **CSS & JS Integration**: All static files correctly served via Flask's `static/` folder  
- **Consistent Navigation**: Updated links using `url_for()` across all templates  
- **Blueprints**: Routes are modularized into separate files for better organization and scalability  

---

## Project Structure

Flask-Banking/
├── run.py # Entry point for running the app
├── app/
│ ├── init.py # App factory & blueprint registration
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
├── home.css
├── about.css
├── contact.css
├── contact.js
├── services.css
├── faq.css
├── mortgage.css
└── mortcalc.js

---

## Day-by-Day Progress

- **Day 1**: Installed Python & Flask, created virtual environment, “Hello World” app  
- **Day 2**: Added static routes, dynamic routes for testing, JSON endpoint, and form handling  
- **Day 3**: Integrated old banking website into Flask, fixed navigation, CSS/JS references, and contact form  
- **Day 4**: Refactored app using **Blueprints**, moved routes into separate files, initialized app in `__init__.py`, and created `run.py` as the entry point

*For detailed notes, see `Day-1.md`, `Day-2.md`, `Day-3.md`, and `Day-4.md`.*

---

## How to Run

1. Clone the repository:  
```bash
git clone <your-repo-url>
cd Flask-Banking
```
2. Create & activate a virtual environment:
```bash
python -m venv venv
venv\Scripts\activate
```
3. Install Flask:
```bash
pip install flask
```
4. Run the Flask app:
```bash
python run.py
```
5. Open your browser:
You should see something like:
* Running on http://127.0.0.1:5000/