# os-command-injection - BAWiM Project
## Starting the thing
1. Have Node.js and Python installed
2. Clone the repository
3. Create a virtual environment in the project folder (`python -m venv venv`)
4. Start the venv (`.\venv\Scripts\Activate.ps1` on Windows or `source venv/bin/activate` on Linux/MacOS) - on Windows you may have to run `Set-ExecutionPolicy Unrestricted -Scope Process` first it you're using Powershell, if it doesn\t work run it in a command prompt with admin privileges
5. Install the Python dependencies (`pip install -r requirements.txt`)
6. Add the folder where your Node.js is located to PATH (most likely `C:\Program Files\nodejs`)
7. Run `npm install`
8. If you're using VS Code that might not work, in which case press `CTRL+Shift+P` and type `ext install npm script runner` and then `npm install`
9. (for some reason) run `npm install -g http-server`
10. Run the frontend server (`http-server` in `src/frontend` using the Node.js command prompt)
11. Run the backend server (`python app.py` in `src/backend`)
12. The app should be on [http://localhost.:8080/](http://localhost.:8080/) (or not - check what the http-server says when you turn it on) - make sure there is a dot between the domain/address and the colon or else Burp won't be able to intercept the traffic (it doesn't like locally hosted websites)
