function clickOfferButton()
{
    alert("Button clicked!");
}

var xhr = null;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

function dataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("User data received!");
        getDate();
        dataDiv = document.getElementById('result-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function getUsers() {
    console.log("Get users...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    // asynchronous requests
    xhr.open("GET", "http://localhost:6060/users", true);
    // Send the request over the network
    xhr.send(null);
}

function getDate() {
    date = new Date().toString();
    document.getElementById('time-container').textContent
        = date;
}
(function () {
    getDate();
})();

function sendDataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Data creation response received!");
        getDate();
        dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function sendData() {
    dataToSend = document.getElementById('data-input').value;
    if (!dataToSend) {
        console.log("Data is empty.");
        return;
    }
    console.log("Sending data: " + dataToSend);
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallback;
    // asynchronous requests
    xhr.open("POST", "http://localhost:6060/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network
    xhr.send(JSON.stringify({"data": dataToSend}));
}

function runCommand() {
    dataToSend1 = document.getElementById('data-input1').value;
    dataToSend2 = document.getElementById('data-input2').value;
    if (!dataToSend1 || !dataToSend2) {
        console.log("Data is empty.");
        return;
    }

    console.log("Sending data: " + dataToSend1 + " " + dataToSend2);
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallback;

    // asynchronous requests
    xhr.open("POST", "http://localhost:6060/command", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Send the request over the network
    xhr.send(JSON.stringify({"var1": dataToSend1, "var2": dataToSend2}));
}