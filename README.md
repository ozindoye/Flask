# Flask Banking Website – Learning Journey

A beginner-friendly Flask project where I integrate my old static banking website into Flask. This project documents my day-by-day progress, learning Flask fundamentals, templates, routes, forms, and static file integration.

---

## Current Features

- **Static Routes**: Home, About, Services, FAQ, Mortgage, Contact  
- **Dynamic Routes**: Examples like `/hello/<name>` and `/sum/<int:a>/<int:b>`  
- **JSON Endpoint**: `/api/data` returning app info  
- **Contact Form**: Submits via Flask `/submit` route with validation  
- **CSS & JS Integration**: All static files correctly served via Flask's `static/` folder  
- **Consistent Navigation**: Updated links using `url_for()` across all templates  

---

## Project Structure

'''
Flask Banking Website
├── README.md
├── app.py
├── venv/
├── templates/       # HTML pages
│   ├── home.html
│   ├── about.html
│   ├── contact.html
│   ├── services.html
│   ├── faq.html
│   └── mortgage.html
└── static/          # CSS and JS files
    ├── home.css
    ├── about.css
    ├── contact.css
    ├── contact.js
    ├── services.css
    ├── faq.css
    ├── mortgage.css
    └── mortcalc.js
'''

---

## Day-by-Day Progress

- **Day 1**: Installed Python & Flask, created virtual environment, “Hello World” app  
- **Day 2**: Added static routes, dynamic routes, JSON endpoint, and form handling  
- **Day 3**: Integrated old banking website

*For detailed notes, see `Day-1.md`, `Day-2.md`, and `Day-3.md`.*

---

## How to Run

1. Clone the repository:  
```bash
git clone <your-repo-url>
cd Flask-Learning-Journal
```
2. Create & activate a virtual environment
```bash
python -m venv venv
venv\Scripts\activate
```
3. Install Flask
```bash
pip install flask
```
4. Run the Flask app
```bash
python app.py
```
5. Open your browser
- You should see something like ' * Running on http://127.0.0.1:5000/ '
- Visit the following URL 'http://127.0.0.1:5000/' to view the website


