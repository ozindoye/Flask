from flask import Flask

def create_app():
    app = Flask(__name__)

    # Import blueprints
    from .routes.home import bp as home_bp
    from .routes.about import bp as about_bp
    from .routes.contact import bp as contact_bp
    from .routes.services import bp as services_bp
    from .routes.faq import bp as faq_bp
    from .routes.mortgage import bp as mortgage_bp

    # Register blueprints
    app.register_blueprint(home_bp)
    app.register_blueprint(about_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(services_bp)
    app.register_blueprint(faq_bp)
    app.register_blueprint(mortgage_bp)

    return app
