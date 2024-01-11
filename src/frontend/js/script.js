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
        // getDate();
        dataDiv = document.getElementById('sent-form-data-container');
        // Set current data text
        textToSet = "Data received by server: " + xhr.responseText.split('received')[1].slice(3).slice(0, -3);
        dataDiv.innerHTML = textToSet;
    }
}

function crashPlane() {
    crashCounter = document.getElementById('plane-crash-count');
    ++planeCrashes;
    crashCounter.innerHTML = planeCrashes;
}