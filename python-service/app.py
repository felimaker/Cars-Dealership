from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/products')
def get_products():
    return jsonify([
        {"id": 1, "name": "Vehículo Sedán Básico"}, 
        {"id": 2, "name": "SUV Premium"}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)