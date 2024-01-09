from flask import Flask
from flask_cors import CORS
import flask
import json
import os.path

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello, world!"

@app.route("/users", methods=["GET"])
def users():
    with open(os.path.dirname(__file__) + "/../../data/users.json", "r") as f:
        data = json.load(f)
        data.append({
            "username": "user4",
            "pets": ["hamster"]
        })

        return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6060)