from flask import Flask, jsonify
from flask_cors import CORS

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/books', methods=['GET'])
def all_books():
    return jsonify({
        'status': 'success',
        'books': BOOKS
    })

if __name__ == '__main__':
    app.run()
