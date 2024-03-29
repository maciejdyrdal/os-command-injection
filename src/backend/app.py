from flask import Flask, request
from flask_cors import CORS
import flask
import json
import subprocess
import shlex
import os.path
import os

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

        with open(os.path.dirname(__file__) + "/../../data/users.json", "r") as f:
            file_data = json.load(f)

        data_dict = {"new-data": message}
        file_data.append(data_dict)

        with open(os.path.dirname(__file__) + "/../../data/users.json", "w") as f:
            f.write(json.dumps(file_data))

        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)

@app.route("/command", methods=["POST"])
def run_command():
    received_data = request.get_json()
    print(f"received data: {received_data}")
    var1 = received_data['var1']
    var2 = received_data['var2']

    # subprocess.call(shlex.split('script.bat param1 param2'))
    os.system("script.bat " + var1 + ' ' + var2)

    return_data = {
            "status": "success",
            "message": f"received: {var1}, {var2}"
        }
    return flask.Response(response=json.dumps(return_data), status=201)

@app.route("/form", methods=["POST"])
def receive_form():
    received_data = request.get_json()
    print(f"received data: {received_data}")
    var1 = received_data['name']
    var2 = received_data['last_name']

    # subprocess.call(shlex.split('script.bat param1 param2'))
    os.system("script.bat " + var1 + ' ' + var2)
    os.system("sh src/backend/script.sh " + var1 + ' ' + var2)

    path_to_file = ''
    if os.getcwd().rsplit('/', 1)[-1] == "os-command-injection":
        path_to_file = os.getcwd() + r"/src/backend"
    else:
        path_to_file = os.getcwd()

    print(path_to_file)
    with open((path_to_file + "/../../data/output.txt"), 'r') as f:
        output_data = f.readlines()

    print(output_data)

    return_data = {
            "status": "success",
            "message": f"received: {output_data}"
        }
    
    return flask.Response(response=json.dumps(return_data), status=201)

@app.route("/radio", methods=["POST"])
def feceive_radio():
    received_data = request.get_json()
    print(f"received data: {received_data}")
    yes_clicked = received_data['yes']
    no_clicked = received_data['no']

    os.system("script.bat " + yes_clicked + ' ' + no_clicked)
    os.system("sh src/backend/script.sh " + yes_clicked + ' ' + no_clicked)

    return flask.Response(response=json.dumps(''), status=201)


if __name__ == "__main__":
    app.run("localhost", 6060)