function clickOfferButton()
{
    alert("Button clicked!");
}

var xhr = null;
var planeCrashes = 0;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

function sendForm() {
    dataName = document.getElementById('fname').value;
    dataLastName = document.getElementById('lname').value;
    if (!dataName || !dataLastName) {
        console.log("Data is empty.");
        return;
    }

    console.log("Sending data: " + dataName + " " + dataLastName);
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendFormCallback;

    // asynchronous requests
    xhr.open("POST", "http://localhost:6060/form", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Send the request over the network
    xhr.send(JSON.stringify({"name": dataName, "last_name": dataLastName}));
}

function sendFormCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Form data response received!");
        dataDiv = document.getElementById('sent-form-data-container');
        // Set current data text
        textToSet = "Data received by server: " + xhr.responseText.split('received')[1].slice(3).slice(0, -3);
        // dataDiv.innerHTML = textToSet;
    }
}

function crashPlane() {
    crashCounter = document.getElementById('plane-crash-count');
    ++planeCrashes;
    crashCounter.innerHTML = planeCrashes;
}

function sendYesNoResponse() {
    yesClicked = document.getElementById('yes').checked;
    noClicked = document.getElementById('no').checked;

    xhr = getXmlHttpRequestObject();

    if (yesClicked || noClicked) {
        console.log("Sending data: " + "clicked" + " " + "not_clicked");

        xhr.open("POST", "http://localhost:6060/radio", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({"yes": "clicked", "no": "not_clicked"}));
    }
}   

function availableOrNot() {
    options = ['Som :DDD', 'Ni ma :CCCC'];
    divElement = document.getElementById('available-or-not');
    textToDisplay = options[Math.floor(Math.random() * options.length)];
    divElement.innerHTML = textToDisplay;
}