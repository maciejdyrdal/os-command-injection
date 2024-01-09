from flask import Flask, request
from flask_cors import CORS
import flask
import json
import os.path

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello, world!"

@app.route("/users", methods=["GET", "POST"])
def users():
    print("users endpoint reached...")
    if request.method == "GET":
        with open(os.path.dirname(__file__) + "/../../data/users.json", "r") as f:
            data = json.load(f)
            data.append({
                "username": "user4",
                "pets": ["hamster"]
            })

            return flask.jsonify(data)
        
    elif request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        message = received_data['data']
        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)

if __name__ == "__main__":
    app.run("localhost", 6060)