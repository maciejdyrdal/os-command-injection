# os-command-injection - BAWiM Project
## Starting the thing
1. Have Node.js and Python
2. Clone the repo
3. Create a venv in the project folder (`python -m venv venv`)
4. Start the venv (`.\venv\Scripts\Activate.ps1` on Windows or `source venv/bin/activate` on Linux/MacOS) - on Windows you may have to run `Set-ExecutionPolicy Unrestricted -Scope Process` first it you're using Powershell, also do this in command prompt with admin privileges
5. Install the Python dependencies (`pip install -r requirements.txt`)
6. Run `npm install`
7. (for some reason) run `npm install -g http-server`
8. Run the frontend server (`http-server` in `src/frontend` using the Node.js command prompt)
9. Run the backend server (`python app.py` in `src/backend`)
10. That's it I think
11. The app should be on [http://localhost:8080/](http://localhost:8080/) (or not - check what the http-server says when you turn it on)
